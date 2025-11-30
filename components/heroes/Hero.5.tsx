"use client";
import React, { useState, useEffect, useRef } from 'react';
//import Bottombar from './Bottombar';
//import { useCategoryStore } from '@/store/categoryStore';
import gsap from 'gsap';
//import useSound from 'use-sound';

const Hero5 = () => {
//   const { category } = useCategoryStore();
  const [image, setImage] = useState('Hero52.jpg');
  const [hasInteracted, setHasInteracted] = useState(false);

  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

//   const [playSwoosh] = useSound('/sounds/swoosh.mp3', { volume: 0.5 });
//   const [playASMR] = useSound('/sounds/swoosh.mp3', { volume: 0.4 });

//   useEffect(() => {
//     if (category === 'Corporate') setImage('/Hero54.jpg');
//     else if (category === 'Ankara') setImage('Hero52.jpg');
//     else if (category === 'Casual') setImage('/Hero53.jpg');
//     else if (category === 'Christmas') setImage('/Hero51.jpg');
//   }, [category]);

  useEffect(() => {
    if (!hasInteracted) return;

    // Animate h1 and h2 with GSAP
    gsap.fromTo(h1Ref.current, 
      { x: -200, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.4, 
        ease: 'power3.out',
        // onStart: playSwoosh 
      }
    );

    gsap.fromTo(h2Ref.current, 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        delay: 1.3, 
        duration: 0.4, 
        ease: 'power2.out',
        // onStart: playASMR 
      }
    );
  }, [hasInteracted]);

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  return (
    <div 
      className={`w-screen relative 
        flex flex-col h-screen 
        bg-center bg-fixed max-md:bg-top`} 
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleInteraction}
    >
      {/* Dark overlay */}
      <div className='absolute 
      top-0 left-0 w-screen 
      h-screen bg-black/30 z-10'></div>

      {/* Tap to Enter Screen */}
      {!hasInteracted && (
        <div className='absolute top-0 left-0 
        w-full h-full bg-black/70
         text-white z-40 flex items-center 
         justify-center text-3xl font-bold cursor-pointer'>
          Tap to Enter
        </div>
      )}

      {/* Hero5 Content */}
      <div className='flex flex-col justify-center z-30 max-md:text-center items-center h-full px-4'>
        <h1 
          ref={h1Ref} 
          className='text-6xl font-bold max-md:text-4xl opacity-0'
        >
          Where <span className='text-amber-500'>Fashion</span> Meets <span className='text-amber-500'>Purpose</span>.
        </h1>
        <h2 
          ref={h2Ref} 
          className='text-white/80 text-2xl mt-4 opacity-0'
        >
          Curated pieces for every moment — bold, effortless, unforgettable.
        </h2>
      </div>

      {/* <Bottombar /> */}
    </div>
  );
};

export default Hero5;
