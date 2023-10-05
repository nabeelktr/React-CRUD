import React, { useEffect, useState } from 'react'
import axios from '../Axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/features/authSlice'
 

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [creds, setcreds] = useState({
    email:'',
    password:''
  })
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('/login',creds)
      dispatch(userLogin(response.data))
      localStorage.setItem('userToken', response.data.token)
      navigate('/profile')

    }catch(err){
      console.log(err,'errrr');
    }
    setcreds({
      email:'',
      password:''
    })
}
useEffect(()=>{
  const isAuth = localStorage.getItem('userToken')
isAuth && navigate('/profile')

},[navigate])
  return (
    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center bg-slate-100">
     
      <div className="flex justify-center self-center  z-10 shadow-2xl rounded-3xl  ">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
              <input
              value={creds.email} 
              onChange={(e)=> setcreds({...creds,email:e.target.value})}
              className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
              type="" placeholder="mail@gmail.com"/>
              </div>
                          <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
              value={creds.password} 
              onChange={(e)=> setcreds({...creds,password:e.target.value})} 
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
              type="" placeholder="Enter your password"/>
            </div>
              <div className="flex items-center justify-between">
             
              {/* <div className="text-sm">
                <a href=" " className="text-green-400 hover:text-green-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
            </div>
          </form>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2023 <Link className='text-sm text-blue-500 hover:underline ' to='/register'>Signup</Link>
                </span>
            </div>
        </div>
      </div>
  </div>

    
  )
}

export default Login