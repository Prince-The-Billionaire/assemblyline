import React from 'react'
import { BiPlus } from 'react-icons/bi'

const Store2 = () => {
  return (
    <div className='px-24 max-md:px-2 min-h-screen py-6'>
      <h1 className='text-5xl font-sans font-semibold mb-6'>Shop From Us</h1>
      <div className='grid max-md:grid-cols-1 grid-cols-4 gap-6'>
        {[0,1,2,3,4,5,6,7].map((item) => (
          <div className='rounded-4xl max-md:w-64 w-xs p-4 shadow-lg bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer'>
            <img src="/shoedemo4.png" alt="shoe demo" className='w-xs rounded-t-4xl'/>
            <div className='rounded-4xl text-white bg-black p-6'>
                <h2 className='font-bold max-md:text-base text-lg'>OSAHON Corporate Shoes</h2>
                <p className='text-white/60'>Corporate</p>
                <h3 className='font-bold text-2xl max-md:text-lg mt-2'>$120.00</h3>
                <div className='flex justify-end items-end '>
                  <button className='text-2xl  rounded-full bg-white/20 cursor-pointer hover:text-black hover:bg-white p-4'><BiPlus/></button>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Store2
