"use client";

import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLImageElement>(null);
  const centerImgRef = useRef<HTMLImageElement>(null);
  const rightImgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !leftImgRef.current ||
      !centerImgRef.current ||
      !rightImgRef.current ||
      !textRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    tl.from(leftImgRef.current, {
      opacity: 0,
      x: -50,
      scale: 0.8,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.from(centerImgRef.current, {
      opacity: 0,
      x:-20,
      width:100,
      height:100,
      scale: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    tl.from(rightImgRef.current, {
      opacity: 0,
      x: 50,
      scale: 0.8,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.from(
      [textRef.current, nameRef.current, titleRef.current],
      {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2"
    );

    tl.from(buttonsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-screen h-screen relative justify-center items-center max-md:py-2 px-6 md:px-24 py-12 bg-gray-100"
    >
      {/* Quote lines */}
      <img
        src="/qoute_line.png"
        className="w-36 h-36 max-md:size-12 absolute left-6 md:left-36 md:top-12 object-contain"
      />
      <img
        src="/qoute_line.png"
        className="w-36 h-36 max-md:size-12 absolute right-6 md:right-36 bottom-12 object-contain rotate-180"
      />

      <div className="flex flex-col ml-0 md:ml-12 justify-center items-center">
        {/* Images */}
        <div className="flex flex-row gap-14 mt-10 mb-6 items-end">
          <img
            ref={leftImgRef}
            src="/profile1.png"
            className="w-36 h-36 max-md:size-12 object-cover self-start rounded-full"
          />
          <img
            ref={centerImgRef}
            src="/profile1.png"
            className="w-56 h-96  max-md:w-10 max-md:h-24 object-cover rounded-3xl md:rounded-full"
          />
          <img
            ref={rightImgRef}
            src="/profile1.png"
            className="w-36 h-36 max-md:size-12 object-cover rounded-full"
          />
        </div>

        {/* Testimonial text */}
        <p
          ref={textRef}
          className="text-black/80 text-center max-w-4xl font-medium text-lg md:text-xl leading-relaxed"
        >
          Since I started using temptimate fashion wears, my confidence has
          soared. The quality and style are unmatched! I've received countless
          compliments and feel amazing every time I wear their clothes. Highly
          recommend to anyone looking to elevate their wardrobe.
        </p>

        <h3
          ref={nameRef}
          className="text-black text-center font-bold text-xl mt-4"
        >
          Mrs Aladeji Amber
        </h3>
        <h4
          ref={titleRef}
          className="text-black text-center font-bold text-lg"
        >
          CEO of Amber Enterprise
        </h4>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-row gap-8 md:gap-24 mt-6"
        >
          <div className="rounded-full border text-black text-2xl border-amber-800 p-4 mt-6 cursor-pointer inline-flex hover:scale-110 transition-transform duration-200">
            <IoIosArrowRoundBack />
          </div>

          <div className="rounded-full bg-amber-800 text-white text-2xl border-amber-800 p-4 mt-6 cursor-pointer inline-flex hover:scale-110 transition-transform duration-200">
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
