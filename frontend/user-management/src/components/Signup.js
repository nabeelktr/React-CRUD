
import { Link, useNavigate } from 'react-router-dom'
import axios from '../Axios'
import React, {  useState } from 'react'

const Signup = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        name : '',
        email:'',
        age:'',
        location:'',
        job:'',
        password:''
    })
    const handleSubmit=async (e)=>{
        e.preventDefault()
        
        try{
            await axios.post('/register',user)
            navigate('/')
        }catch(err){
            if(err.request.status === 400){
                alert('user exists..')
            };
        }        
        setuser({
            name : '',
        email:'',
        age:'',
        location:'',
        job:'',
        password:''
        })
    }

 
    return (
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center bg-slate-100">

            <div className="flex justify-center self-center  z-10 shadow-2xl rounded-3xl  ">
                <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div className="mb-2">
                        <h3 className="font-semibold text-2xl text-gray-800">Sign up </h3>
                        <p className="text-gray-500">Sign up to your account.</p>
                    </div>
                    <form className="space-y-3" onSubmit={handleSubmit}>

                    <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Name</label>
                            <input 
                            value={user.name}
                            onChange={(e)=> setuser({...user,name: e.target.value})}
                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                            type="text" placeholder="Enter your name" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                            <input 
                            value={user.email}
                            onChange={(e)=> setuser({...user,email: e.target.value})}
                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                            type="email" placeholder="mail@gmail.com" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Age</label>
                            <input 
                            value={user.age}
                            onChange={(e)=> setuser({...user,age: e.target.value})}
                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                            type="text" placeholder="Enter your age" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Location/city</label>
                            <input
                            value={user.location}
                            onChange={(e)=> setuser({...user,location: e.target.value})}
                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                            type="text" placeholder="Enter your Location" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Job Title/Occupation</label>
                            <input
                            value={user.job}
                            onChange={(e)=> setuser({...user,job: e.target.value})} 
                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                            type="text" placeholder="Enter your details" />
                        </div>

                      

                        <div className="space-y-1">
                            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input 
                            value={user.password}
                            onChange={(e)=> setuser({...user,password: e.target.value})}
                            className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                            type="text" placeholder="Enter your password" />
                        </div>
                        <div className="flex items-center justify-between">


                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="pt-2 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2023 <Link className='text-sm text-blue-500 hover:underline ' to='/'>SignIn</Link>
                </span>
            </div>
                </div>
            </div>
        </div>

    )
}

export default Signup