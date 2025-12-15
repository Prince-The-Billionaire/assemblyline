import React from 'react'
import { CgHome } from 'react-icons/cg'
import { FaBed, FaHeart, FaHome, FaToilet } from 'react-icons/fa'
import { FaTape } from 'react-icons/fa6'
import { GiDiamondRing } from 'react-icons/gi'
import { HiMapPin } from 'react-icons/hi2'
import { LuBuilding2 } from 'react-icons/lu'
import { PiBuildingApartmentDuotone } from 'react-icons/pi'

const Store3 = () => {
  return (
    <div className='min-h-screen flex flex-col items-center max-md:px-2 px-12 py-24  gap-12'>
      <h1 className='text-2xl font-bold'>Our Listings</h1>
      <div className='flex flex-row gap-12 max-md:grid max-md:grid-cols-2 max-md:gap-6'>
        <div className='flex flex-row items-center bg-sky-100/40 text-sky-600 p-3 max-md:p-1 rounded-full'>
            <HiMapPin className='text-2xl'/>
            <p className='max-md:text-xs'>Lagos, Nigeria</p>
        </div>

        <div className='p-3 max-md:text-xs text-white bg-sky-500  rounded-full'>All Categories</div>
        <div className="flex gap-3 text-black/60 items-center">
            <LuBuilding2 />
            <span>Duplex</span>
        </div>

        <div className="flex gap-3 text-black/60 items-center">
            <FaHome />
            <span>Bungalow</span>
        </div>

        <div className="flex gap-3 text-black/60 items-center">
            <PiBuildingApartmentDuotone />
            <span>Studio Apartment</span>
        </div>

        <div className="flex gap-3 text-black/60 items-center">
            <GiDiamondRing />
            <span>Luxury Suites</span>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-8 max-md:grid-cols-1'>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((item,index)=>(
            <div className='relative gap-4 border border-black/10 rounded-2xl shadow-md shadow-black/10 flex flex-col w-80 max-md:w-64' key={index}>
            <div className='p-5 rounded-full bg-black/10 backdrop-blur absolute top-4 right-4'>
                <FaHeart className='text-sky-500 text-3xl '/>
            </div>
            <img src={'/house.png'}  className='w-80 max-md:w-64 object-cover rounded-t-2xl'/>
            <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-row items-center w-fit gap-4 bg-sky-200/30 text-sky-500 rounded-2xl p-2'> <CgHome/> Apartment</div>
                <h2 className='font-bold text-xl'>Elegant White Premium</h2>
                <p className='text-lg text-black/70 '>234 Lane, Banana Island, Lagos</p>
                <div className='text-xs flex flex-row max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-2 justify-between items-center'>
                    <div className='flex flex-row bg-blue-400/20 rounded-xl p-1 items-center justify-center gap-2 text-black/60'> <FaBed className='text-sky-400'/> 3 beds</div>
                    <div className='flex flex-row bg-blue-400/20 rounded-xl p-1 items-center justify-center gap-2 text-black/60'> <FaToilet className='text-sky-400'/> 3 Toilets</div>
                    <div className='flex flex-row bg-blue-400/20 rounded-xl p-1 items-center justify-center gap-2 text-black/60'> <FaTape className='text-sky-400'/> 1km X 3km </div>
                </div>
                <div>
                    <p className='text-3xl text-sky-600 font-bold'>#2,200,000<span className='text-lg text-sky-600/70'>/year</span></p>
                </div>
                
            </div>
            
        </div>
        ))}
      </div>
    </div>
  )
}

export default Store3
