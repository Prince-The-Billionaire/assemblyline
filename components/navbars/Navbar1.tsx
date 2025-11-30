import React from 'react'

const Navbar1 = () => {
  return (
    <nav className='flex fixed top-5 text-black z-100 w-screen justify-between px-16 flex-row gap-10'>
      <div className=' flex flex-row max-md:px-2 max-md:gap-5 justify-between px-8 p-3 backdrop-blur-md rounded-full md:w-[50%]'>
        <h1 className='font-bold'>Temptimate</h1>
        <p className='font-bold'>Home</p>
        <p className='text-black/60'>Shop</p>
      </div>
      <div className=' flex flex-row max-md:hidden justify-between px-8 p-3 backdrop-blur-md text-black/60 rounded-full w-[30%]'>
        <h1>Temptimate</h1>
        <p>Home</p>
        <p>Add to Cart(0)</p>
      </div>
    </nav>
  )
}

export default Navbar1
