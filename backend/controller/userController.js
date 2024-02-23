import AsyncHandler from 'express-async-handler'
import User from '../modals/userModal.js';
import generateToken from '../utils/generateToken.js';

const authUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email: email });

    if (user ) {
      if((await user.matchPassword(password))){

      
      res.json({
        _id: user._id,
        name: user.name,
        img: user.img,
        location: user.location,
        job: user.job,
        age: user.age,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invlaid error");
    }
  }else{
    res.status(402)
    throw new Error("Invlaid user");
  }
  
    
  });

const registerUser = AsyncHandler(async (req, res) => {
   
    const { email,name,age,location,job,password } = req.body;
  
    const user = await User.findOne({ email: email });
  
    if (user) {
      res.status(400);
      
    throw new Error("User exists");
    }
  
    const newUser = await User.create({
      name,
      email,
      age,
      location,
      job,
      password,
    });
  
    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid userData");
    }
});
  
const upadatePicture =AsyncHandler(async(req,res)=>{
    
    const user = await User.findById(req.params.id)

   if (user) {
      user.img = req.body.image;
      await user.save(); 
      res.status(201).json({
        img: user.img,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }

})


  export {registerUser,authUser ,upadatePicture}