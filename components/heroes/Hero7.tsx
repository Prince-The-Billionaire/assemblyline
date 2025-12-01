"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero7 = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const shoeRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(titleRef.current, { type: "chars" });

      // Add gradient + bg-clip-text to each char
      split.chars.forEach((char) => {
        char.classList.add(
          "bg-gradient-to-b",
          "from-slate-900",
          "via-slate-700",
          "to-gray-100/40",
          "text-transparent",
          "bg-clip-text"
        );
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate characters
      tl.from(split.chars, {
        duration: 1.8,
        opacity: 0,
        y: 100,
        stagger: 0.18,
        ease: "expo.out",
      });

      // Shoe animation
      tl.from(
        shoeRef.current,
        { y: 160, opacity: 0, duration: 1.3 },
        "-=0.7"
      );

      // Bottom-left animation
      tl.from(
        leftRef.current,
        { y: 80, opacity: 0, duration: 1 },
        "-=0.6"
      );

      // Bottom-right animation
      tl.from(
        rightRef.current,
        { y: 80, opacity: 0, duration: 1 },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="h-screen flex flex-col items-center relative py-20 px-4 bg-gray-50 overflow-hidden"
    >
      {/* Gradient animating title */}
      <h1
        ref={titleRef}
        className="text-[16rem] max-md:mt-24 max-md:text-5xl font-bold"
      >
        OSAHON
      </h1>

      {/* Shoe */}
      <img
        ref={shoeRef}
        src="/shoedemo2.png"
        alt="shoe demo"
        className="absolute top-52 max-md:top-48 left-36 max-md:left-4 w-[80vw]"
      />

      {/* Bottom-left */}
      <div
        ref={leftRef}
        className="absolute max-md:text-center max-md:left-0 max-md:w-full max-md:bottom-36 bottom-10 left-10 max-w-md"
      >
        <h2 className="text-4xl max-md:text-sm font-bold mb-4">
          Premium Shoes For those Seeking Quality and Style
        </h2>
        <h3 className="text-lg max-md:text-xs text-black/60 max-md:mb-1 mb-6">
          Step into Excellence with OSAHON Footwear
        </h3>

        <div className="flex max-md:h-10 max-md:justify-center max-md:flex-row">
          <button className="bg-black max-md:text-xs text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button>
          <button className="ml-4 max-md:text-xs text-black px-6 py-3 rounded-full border border-black hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom-right */}
      <div
        ref={rightRef}
        className="absolute bottom-10 text-right max-md:text-center right-10"
      >
        <h2 className="font-bold max-md:text-base text-3xl text-black/60">
          Over 2000+ Happy Customers
        </h2>
        <h3 className="font-bold max-md:text-xs text-4xl">
          40+ Custom Designs
        </h3>
      </div>
    </div>
  );
};

export default Hero7;
