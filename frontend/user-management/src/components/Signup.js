import React from 'react'

const Signup = () => {
    return (
        <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center bg-slate-100">

            <div class="flex justify-center self-center  z-10 shadow-2xl rounded-3xl  ">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="mb-4">
                        <h3 class="font-semibold text-2xl text-gray-800">Sign up </h3>
                        <p class="text-gray-500">Sign up to your account.</p>
                    </div>
                    <form class="space-y-5">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                            <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Age</label>
                            <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Enter your age" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Location/city</label>
                            <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Enter your Location" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Job Title/Occupation</label>
                            <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Enter your details" />
                        </div>

                      

                        <div class="space-y-2">
                            <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                        </div>
                        <div class="flex items-center justify-between">


                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                Sign up
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default Signup