import AsyncHandler from 'express-async-handler'
import User from '../modals/userModal';
import generateToken from '../utils/generateToken';



const authAdmin = AsyncHandler(async(req,res) => {
    const {email,password}=req.body
    const user = await User.findOne({email:email})
  
    if(user && user.__v == 1 && (await user.matchPassword(password) )){
       
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            img: user.img,
            adminToken: generateToken(user._id),
          });
        } else {
          res.status(401);
          throw new Error("Invlaid error");
        }

})

const getUsers =AsyncHandler(async(req,res)=>{
    const users = await User.find({__v:0})
    if(users){
        res.status(201).json(users)
    }else{
        throw new Error('Invalid error')
    }

})

const searchUser = AsyncHandler(async (req,res)=>{
   
    const users = await User.find({name : {$regex: new RegExp(req.body.name, 'i')} , __v:0})
    
    if(users){
    
    res.status(201).json(users)
    }else{
        throw new Error('Invalid error')
        }

   
})


export {authAdmin,getUsers,searchUser}