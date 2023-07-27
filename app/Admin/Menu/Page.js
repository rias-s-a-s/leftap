import React from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import { BsFileEarmarkPostFill } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'

function AdminMenu({ set }) {
    return (
        <>
            <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div class="-mx-6 px-6 py-4">
                        <img src="/Logos/Logo.webp" class="w-32" alt="tailus logo" />
                    </div>

                    <div class="mt-8 text-center">
                        <img src="/MarinaAdmin.webp" alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Marina</h5>
                        <span class="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">

                        <li class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer" onClick={() => {
                            set("Add")
                        }}>
                            <AiFillFileAdd className='h-5 w-5 group-hover:text-cyan-500' />
                            <span class="group-hover:text-gray-700">Crear Post</span>
                        </li>
                        <li class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer" onClick={() => {
                            set("View")
                        }}>
                            <BsFileEarmarkPostFill className='h-5 w-5 group-hover:text-cyan-500' />
                            <span class="group-hover:text-gray-700">Posts</span>
                        </li>
                        {/* <li>
                            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                                <span class="group-hover:text-gray-700">Other data</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                </svg>
                                <span class="group-hover:text-gray-700">Finance</span>
                            </a>
                        </li> */}
                    </ul>
                </div>

                <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <HiOutlineLogout className='h-6 w-6' />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg> */}
                        <span class="group-hover:text-gray-700">Salir</span>
                    </button>
                </div>
            </aside></>
    )
}

export default AdminMenu