import React, { useEffect, useState } from 'react'
import { Product } from './Product'


const products=[
    {title:"MOTOROLA e13 (Cosmic Black, 128 GB)  (8 GB RAM)", desc:"₹8,999",img:"moto.webp"},
    {title:"MOTOROLA e13 (Cosmic Black, 128 GB)  (8 GB RAM)", desc:"₹8,999",img:"moto.webp"}
    ]


export const History = (props) => {
    const [mounted, setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    // replace products with props.array
    const arrayDataItems = props.array?.map(product => 
       <li className='my-5'> <Product title={`${product[0]}`} img={`${product[1]}`}/></li>
      )
  return (
    mounted?(
    <div className='flex flex-col justify-center items-center'>
        <h1 className='flex items-center justify-center font-extrabold text-5xl'>Purchase History</h1>
        <div className='mt-10'>
        {arrayDataItems?(<ul>{arrayDataItems}</ul>):(<div>Loading</div>)}
             
        </div>

    </div>
    ):(<div>Loading</div>)
  )
}
