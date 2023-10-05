import React, { Fragment, useEffect, useRef, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import axios from '../../Axios'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/features/authSlice'



const UpdateModal = ({ modal, closeModal, user }) => {

  const cancelButtonRef = useRef(null)
  const dispatch = useDispatch()
  const [creds, setcreds] = useState({
    
    name: '',
    age: '',
    email: '',
    location: '',
    job: '',
    img: ''
  })

  const updateUser = async (e) => {
    e.preventDefault()
    try {
      user !== 'undefined' ?
        await axios.post(`/admin/updateuser/${user._id}`, creds)
        :
        await axios.post('/admin/adduser', creds);
      closeModal()
       dispatch(userLogin(creds))
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
   

      setcreds({
        
        name: user?.name,
        age: user?.age,
        email: user?.email,
        location: user?.location,
        job: user?.job,
        img: user?.img
      }) 
    

  }, [user])


  return (
    <>

      <Transition.Root show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          {user === 'undefined' ? "Enter User Details" : "Edit User Details"}
                        </Dialog.Title>
                        <div className="mt-2">
                          <form onSubmit={updateUser}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text"
                                  value={creds.name}
                                  onChange={(e) => setcreds({ ...creds, name: e.target.value })}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                              </div>
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input type="text"
                                  value={creds.age}
                                  onChange={(e) => setcreds({ ...creds, age: e.target.value })}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                              </div>
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text"
                                  value={creds.email}
                                  onChange={(e) => setcreds({ ...creds, email: e.target.value })}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                              </div>
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                <input type="text"
                                  value={creds.location}
                                  onChange={(e) => setcreds({ ...creds, location: e.target.value })}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                              </div>
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                                <input type="text"
                                  value={creds.job}
                                  onChange={(e) => setcreds({ ...creds, job: e.target.value })}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                              </div>

                            </div>
                            <div className="flex items-center space-x-4">
                              <button

                                type="submit"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Update User</button>

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </>
  )
}

export default UpdateModal