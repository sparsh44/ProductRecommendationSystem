import { useRouter } from 'next/router';
import React, { useState } from 'react'

export const Login = () => {
    const [userId, setuserid]=useState(null);
    const router=useRouter();
    const handleClick=()=>{
        // e.preventDefault();
       
          router.push(`/Recomd/${userId}`)
        
    }
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className=' font-extrabold text-4xl'>Enter Login UserId</h1>
    <div className='h-fit w-fit mt-20 border-solid border-2 p-10 rounded-2xl border-black'>
   
    <div class="mb-6">
      <label for="userid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your UserId</label>
      <input type="text" onChange={(e)=>{setuserid(e.target.value)}} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
    </div>
   
    
    <button onClick={()=>{handleClick()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
  </div>
  </div>
  )
}
