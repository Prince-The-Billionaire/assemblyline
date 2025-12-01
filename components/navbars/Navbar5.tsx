"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { LuShoppingBag } from 'react-icons/lu';

const Navbar5 = () => {
  const [isOpen, setIsOpen] = useState(false);
      const [isHero, setIsHero] = useState(true);
      const pathname = usePathname();
    
      
      const toggleMenu = () => setIsOpen(!isOpen);
    
      // Detect scroll to toggle text color (for non-room pages)
      useEffect(() => {
        const handleScroll = () => {
          setIsHero(window.scrollY < window.innerHeight * 0.8);
        };
    
        if (!pathname.startsWith('/room')) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          handleScroll();
        }
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, [pathname]);
    
      // Always black text for /room/[id]
      const inRoomPage = pathname.startsWith('/room');
      const inBlogPage = pathname.startsWith('/blog');
    
      // Dynamic text color
      const navTextColor = inRoomPage ? 'text-black' : isHero ? 'text-white' : inBlogPage?'text-black': 'text-black';
      //const navBg = inRoomPage ? 'bg-slate-100/70 backdrop-blur-xl' : 'bg-slate-200/20 backdrop-blur-xl';
    
  return (
    <div className='fixed bg-transparent backdrop-blur w-screen flex flex-row text-black justify-between items-center px-8 py-4 z-50'>
        <Link href="/" className={`font-bold text-lg text-black`}>
          OSAHON
        </Link>

        <ul className={`hidden md:flex gap-6 flex-row font-medium text-sm md:text-base items-center   `}>
          <Link href="/team" className={`hover:text-slate-700 transition  `}>Team</Link>
          <Link href="/about" className={`hover:text-slate-700 transition  `}>About</Link>
          <Link href="/blog" className={`hover:text-slate-700 transition  `}>Blogs</Link>
          <Link href="/contact" className={`hover:text-slate-700 transition  `}>Contact</Link>
          
          <LuShoppingBag  className={`cursor-pointer text-2xl hover:text-slate-600 transition  `} />
          
        </ul>
        <Link href="/meetings" className={`hover:bg-slate-700 transition max-md:hidden text-white px-3   bg-slate-700 rounded-3xl p-2 `}>Meetings</Link>

         <div className="flex flex-row gap-4 md:hidden items-center max-md:ml-auto">
            <button onClick={toggleMenu} className={`md:hidden text-2xl focus:outline-none text-black`}>
              {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
            <LuShoppingBag  className={`md:hidden cursor-pointer text-2xl hover:text-slate-600 text-black transition `} />
          </div>

        {isOpen && (
        <ul
          className={`md:hidden flex flex-col gap-4 px-6 py-4 bg-slate-200/40 backdrop-blur-xl font-medium text-base shadow-md rounded-b-2xl transition-all duration-300 ${navTextColor}`}
        >
          <Link href="/team" className={`hover:text-slate-700 ${navTextColor}`} onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/about" className={`hover:text-slate-700 ${navTextColor}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/blog" className={`hover:text-slate-700 ${navTextColor}`} onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/contact" className={`hover:text-slate-700 ${navTextColor}`} onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/meetings" className={`hover:text-slate-700 transition ${navTextColor}`} onClick={() => setIsOpen(false)}>Meetings</Link>
        </ul>
      )}
    </div>
  )
}

export default Navbar5
