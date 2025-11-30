"use client"

import React, { useEffect, useRef } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const Hero1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SplitText animation
      const split = new SplitText(".hero-title", { type: "chars" });
      const chars = split.chars;

      gsap.from(chars, {
        y: 80,
        opacity: 0,
        stagger: 0.03,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        delay: 0.4,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-btn", {
        opacity: 0,
        y: 40,
        delay: 0.7,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-stats", {
        opacity: 0,
        x: -40,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-img", {
        scaleY:0.3,
        opacity: 0,
        delay: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-right > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 min-h-screen px-6 sm:px-10 md:px-16 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center py-12"
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col justify-center h-full gap-6">
        <h1 className="text-4xl sm:text-2xl lg:text-6xl font-bold hero-title leading-tight">
          Building Dreams
        </h1>

        <p className="text-black/60 text-lg sm:text-xl lg:text-2xl hero-sub">
          We turn bold dreams into modern architecture that feels warm,
          functional, and inspiring
        </p>

        <button className="bg-black hero-btn w-fit text-white px-6 py-3 rounded-full flex items-center gap-2 mt-2">
          Start your project <FaArrowRightLong />
        </button>

        <div className="flex flex-col hero-stats mt-10 gap-2">
          <p className="text-4xl sm:text-5xl font-semibold">30k+</p>
          <p className="text-black/70 text-sm sm:text-base">
            People who trusted us to create inspiring spaces
          </p>

          <div className="flex flex-row sm:-space-x-3 -space-x-2">
            <div className="flex justify-center border border-white items-center size-10 bg-red-300 rounded-full">A</div>
            <div className="flex justify-center border border-white items-center size-10 bg-blue-300 rounded-full">B</div>
            <div className="flex justify-center border border-white items-center size-10 bg-green-300 rounded-full">C</div>
            <div className="flex justify-center border border-white items-center size-10 bg-yellow-300 rounded-full">D</div>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <img
          src={"/modern_house.png"}
          alt="modern house"
          className="rounded-2xl max-md:aspect-square max-md:object-cover origin-top hero-img w-full"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col hero-right justify-center h-full gap-4">
        <div className="flex sm:flex-row text-2xl text-black gap-2 sm:gap-6">
          <div className="flex flex-row gap-1 text-black/50">
            {[0, 1, 2, 3, 4].map((i) => (
              <BsStarFill key={i} />
            ))}
          </div>
          <span>4.8</span>
        </div>

        <p className="text-black/60 text-base sm:text-lg">Average rating of customers</p>

        <div className="flex flex-row gap-4">
          <img src={"/house.png"} alt="house" className="w-20 sm:w-48 rounded-md" />
          <img src={"/house.png"} alt="house" className="w-20 sm:w-48 rounded-md" />
        </div>

        <div className="mt-20">
          <h1 className="underline text-xl sm:text-2xl decoration-dotted">
            Award-Winning & Innovative
          </h1>
          <p className="mt-6 text-black/60 text-sm sm:text-base">
            Recognized with multiple international and national awards, won over
            30 contracts for construction. Pace setter for innovation and quality designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
