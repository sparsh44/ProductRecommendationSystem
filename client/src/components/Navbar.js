// import React from 'react'
// import Image from 'next/image'
// import { Dropdown, Item } from 'flowbite-react';

// export const Navbar = () => {
//   return (
//     <div className='flex flex-row justify-start items-center'>
        // <img src='/flipkart.png' className='h-32 w-42 pl-12'/>
        //     <div class=' flex p-4 mx-10 items-center justify-center w-8/12'>
//             <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
//                 <div class="grid place-items-center h-full w-12 text-gray-300">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                 </div>

//                 <input
//                 class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
//                 type="text"
//                 id="search"
//                 placeholder="Search something.." /> 
//             </div>
//         </div>
            

//     </div>
//   )
// }

// Navbar.js
import React, { useState } from 'react';

export const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='flex flex-row justify-start items-center'>
              <img src='/flipkart.png' className='h-32 w-42 pl-12'/>
            <div class=' flex p-4 mx-10 items-center justify-center w-8/12'>
      <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search something.."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
    </div>
  );
};
