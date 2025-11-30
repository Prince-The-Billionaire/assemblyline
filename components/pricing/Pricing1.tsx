import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Pricing1 = () => {
  return (
    <div className='bg-gray-50 min-h-screen py-20 px-6'>
        <div className='text-8xl max-md:text-4xl font-clarimind font-bold text-black flex flex-col md:ml-36 mb-20 '>
            <h1 className='ml-[10%]'>Choose</h1>
            <h1 className='ml-[20%] text-purple-400'>Your</h1>
            <h1 className='ml-[30%]'>Plan</h1>
            <div className='ml-[40%] h-1 bg-black/15 w-[35%]'/>
        </div>
        <div className='max-w-md ml-auto text-left mb-12 rounded-l-2xl text-black shadow shadow-purple-200/30 p-10 border border-purple-100/50 bg-white/60 backdrop-blur-md'>
            <p className='text-purple-600 mb-4 text-2xl'>Premium</p>
            <p className='text-4xl font-bold mb-4'>$5<span className='text-xs font-light text-black/60'>/mo</span></p>
            <p className='text-black/60 mb-4'>Get Full Access to all sessions and tools</p>
            <button className='bg-purple-700 rounded-2xl p-2 w-full text-white mb-4 hover:bg-purple-800 cursor-pointer duration-400 transition-all'>Join Now</button>
            <div className='h-1 w-full bg-black/10 mb-4'/>
            <div className='text-black/60 text-left space-y-2'>
            <p>What&apos;s Included:</p>
                <ul>
                    <li className='flex flex-row items-center gap-2'> 
                        <IoIosCheckmarkCircle className='text-purple-700 text-3xl' /> 
                        Daily guided wellness chats</li>
                    <li className='flex flex-row items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-purple-700 text-3xl' /> 
                        Therapist-led group sessions</li>
                    <li className='flex flex-row items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-purple-700 text-3xl' /> 
                        Self-care challenges</li>
                    <li className='flex flex-row items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-purple-700 text-3xl' /> 
                        Journaling & reflection tools</li>
                    <li className='flex flex-row items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-purple-700 text-3xl' /> 
                        Safe peer support groups</li>
                    <li className='flex flex-row items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-purple-700 text-3xl' /> 
                        Access to licensed therapists </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing1
