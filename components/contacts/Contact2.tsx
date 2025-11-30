"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Contact2 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subTextRef = useRef<HTMLHeadingElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const sendRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  const [inputValue, setInputValue] = useState("");

  // Dynamic underline width based on text length
  useEffect(() => {
    if (underlineRef.current) {
      const newWidth = Math.min(100, inputValue.length * 5); // cap width at 100%
      gsap.to(underlineRef.current, {
        width: `${newWidth}%`,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [inputValue]);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, { type: "words, chars" });
      const chars = split.chars;

      gsap.set([chars, subTextRef.current, inputRef.current, sendRef.current], {
        opacity: 0,
        y: 40,
      });
      gsap.set(sendRef.current, { x: -200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate main headline
      tl.to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "power3.out",
        duration: 1.2,
      })
        // Animate subtext and input
        .to(
          [subTextRef.current, inputRef.current],
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power3.out",
            duration: 0.8,
          },
          "-=0.4"
        )
        // Animate send icon from left
        .to(
          sendRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-purple-50 text-left text-black flex flex-col justify-center px-6 md:px-24 py-20 gap-6"
    >
      <h1
        ref={headlineRef}
        className="font-clarimind text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Hello, We&apos;ve been expecting you
      </h1>

      <h2
        ref={subTextRef}
        className="text-lg sm:text-xl md:text-2xl text-black/70"
      >
        Let&apos;s grow and improve mentally together
      </h2>

      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-2xl sm:text-3xl md:text-4xl font-clarimind focus:border-none w-full outline-none ring-0 focus:outline-none bg-transparent"
          placeholder="Enter Your Email"
        />
        <div ref={sendRef} className="mb-4">
          <IoSend className="text-3xl sm:text-4xl text-black cursor-pointer hover:text-purple-700 transition" />
        </div>
      </div>

      <div
        ref={underlineRef}
        className="h-[2px] bg-black/20 mt-6 w-0 origin-left"
      />
    </div>
  );
};

export default Contact2;
