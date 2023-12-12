import React from 'react'

export const Product = (props) => {
  return (
    <div>
      <a
        href='#'
        class='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <div class='flex flex-col justify-between p-4 leading-normal'>
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2'>
            {props.title}
          </h5>
          <div className=''>{props.desc}</div>
          {props.userValid == 1 ?(<label className='p-2 font-bold'>Predicted Rating:{props.rating}</label>):(<label className='p-2 font-bold'>Distances:{props.rating}</label>)}
    
          <a
            href='#'
            class='inline-flex w-40 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Buy Now ProductId : {props.prodId}
          </a>
        </div>
      </a>
    </div>
  )
}
