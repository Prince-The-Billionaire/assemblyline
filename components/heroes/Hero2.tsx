import React from 'react'

const Hero2 = () => {
  return (
    <div className='bg-gray-50 text-black flex flex-col justify-center px-24 h-screen'>
      <h1 className='text-7xl font-bold w-xl '>Unlock Growth With Every Payment</h1>
      <h2 className='text-black/60 text-base mt-4'>Run payments, handle transfers, record transactions</h2>
      <div className='mt-8 flex gap-6 flex-row'>
        <button className='bg-amber-900 text-white text-xl rounded-2xl w-fit  p-4'>
            Get Started
        </button>
        <button className='backdrop-blur-md bg-black/10 border border-gray-300 text-xl rounded-2xl w-fit hover:bg-black/30  p-4 text-black'>
            Learn more
        </button>
      </div>

    </div>
  )
}

export default Hero2
