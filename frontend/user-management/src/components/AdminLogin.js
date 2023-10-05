import React from 'react'

const AdminLogin = () => {
  return (
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center bg-slate-100">
     
      <div class="flex justify-center self-center  z-10 shadow-2xl rounded-3xl  ">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div class="mb-4">
              <h3 class="font-semibold text-2xl text-gray-800">Admin Sign In </h3>
              <p class="text-gray-500">Please sign in to your account.</p>
            </div>
            <form class="space-y-5">
                        <div class="space-y-2">
                              <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
              <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com"/>
              </div>
                          <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password"/>
            </div>
              <div class="flex items-center justify-between">
             
              {/* <div class="text-sm">
                <a href=" " class="text-green-400 hover:text-green-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
            </div>
          </form>
            <div class="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2023
                </span>
            </div>
        </div>
      </div>
  </div>

    
  )
}

export default AdminLogin