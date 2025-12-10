"use client"

import React, { useLayoutEffect, useRef } from "react";
import { IoSearch, IoStar } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const profiles = [
  { letter: "A", bg: "bg-yellow-400" },
  { letter: "B", bg: "bg-pink-400" },
  { letter: "C", bg: "bg-green-400" },
  { letter: "D", bg: "bg-indigo-400" },
  { letter: "E", bg: "bg-red-400" },
];

const Hero8 = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const trendingImgsRef = useRef<HTMLDivElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title SplitText
      const split = new SplitText(titleRef.current, { type: "words" });
      gsap.from(split.words, {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
      });

      // Subtitle SplitText
      const splitSub = new SplitText(subtitleRef.current, { type: "words" });
      gsap.from(splitSub.words, {
        y: 30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3,
        stagger: 0.04,
      });

      // Search bar
      gsap.from(searchRef.current, {
        x: -100,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 0.6,
        duration: 0.8,
      });

      // Trending images
      gsap.from(trendingImgsRef.current?.children || [], {
        opacity: 0,
        x: -40,
        stagger: 0.2,
        duration: 0.7,
        delay: 0.9,
        ease: "power2.out",
      });

      // House main image
      gsap.from(mainImgRef.current, {
        scale: 0.7,
        opacity: 0,
        y: -100,
        ease: "power2.out",
        delay: 1.2,
        duration: 1.1,
      });

      // Ratings badge pop
      gsap.from(badgeRef.current, {
        scale: 0,
        opacity: 0,
        delay: 1.7,
        ease: "back.out(1.8)",
      });

      // Map badge lower pop
      gsap.from(badge2Ref.current, {
        scale: 0,
        opacity: 0,
        delay: 2,
        ease: "back.out(1.8)",
      });

      // Bottom stats
      gsap.from(statsRef.current?.children || [], {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 2.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-row max-md:flex-col max-md:px-6 max-md:pt-24  px-24 items-center max-md:gap-4 gap-12 bg-gray-100">
      <div className='relative flex flex-col gap-8 max-w-md'>
        <h1 ref={titleRef} className='text-5xl mb-24 max-md:mb-8 font-bold'>
          Find The Best Living Experience
        </h1>

        <p ref={subtitleRef}>
          Make your life more comfortable by living in a house that is affordable and quality
        </p>

        <div ref={searchRef}
          className='md:absolute md:top-32 max-md:relative md:-right-20 z-15 bg-white flex p-2 items-center shadow-black/50 shadow-xs flex-row gap-4'>
          <IoSearch className='text-2xl' />
          <input className='focus:outline-none w-80 max-md:w-36 focus:ring-0 ' type='search' placeholder='find the one closest to you' />
          <button className='bg-linear-to-br from-blue-500 via-blue-700 to-black/60 p-4 text-white'>Search</button>
        </div>

        <div>
          <h2>Trending Place</h2>
          <div ref={trendingImgsRef} className='flex flex-row gap-4 '>
            <img className='w-30 max-md:w-10' src={'/modern_house.png'} alt='house' />
            <img className='w-30 max-md:w-10' src={'/modern_house.png'} alt='house' />
            <img className='w-30 max-md:w-10' src={'/modern_house.png'} alt='house' />
          </div>
        </div>
      </div>

      <div className='relative  max-md:hidden'>
        <div ref={badgeRef} className='absolute z-20 max-md:relative top-20 flex flex-row gap-8 shadow-xs shadow-black/40 -left-10 p-3 bg-white'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
              <IoStar className='text-yellow-500 text-lg' />
              <p className='font-bold'>4.9/5.0</p>
            </div>
            <p className='text-black/60'>(10k Reviews)</p>
          </div>

          <div className="-space-x-4 flex items-center">
            {profiles.map((p, i) => (
              <div key={i} className={`${p.bg} text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold ring-2 ring-white`}>
                {p.letter}
              </div>
            ))}
          </div>
        </div>

        <img ref={mainImgRef} className='w-[40vw] h-[90vh] z-10 object-cover' src="/modern_house.png" alt="modern house" />

        <div ref={badge2Ref} className='absolute items-center bottom-10 flex flex-row -right-20 gap-6 bg-white p-4 shadow-black/40 shadow-md'>
          <LuMapPin />
          <p className='w-72 text-black/50'>Easy way to find affordable and premium houses close to you</p>
        </div>
      </div>


      <div ref={statsRef} className='flex flex-col max-md:flex-row justify-between h-[60vh]'>
        <span>
          <h3 className='font-bold max-md:text-3xl text-5xl'>40+ </h3>
          <p className='max-md:text-xs text-black/70'>Award Gained</p>
        </span>

        <span>
          <h3 className='font-bold max-md:text-3xl text-5xl'>18k+ </h3>
          <p className='max-md:text-xs text-black/70'>Satisfied Client</p>
        </span>

        <span>
          <h3 className='font-bold max-md:text-3xl text-5xl'>500+ </h3>
          <p className='max-md:text-xs text-black/70'>Various of Real Estate</p>
        </span>
      </div>
    </div>
  );
};

export default Hero8;
