"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, ScrollTrigger)

const Blog1 = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const bottomBlog1sRef = useRef<HTMLDivElement>(null);
  const rightBlog1sRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headerRef.current || !bottomBlog1sRef.current || !rightBlog1sRef.current || !containerRef.current) return;
      const split = new SplitText(headerRef.current, { type: "lines" })

      gsap.from(split.lines, {
        y: 80,
        opacity: 0,
        skewX: 20,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      })

      gsap.from(bottomBlog1sRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      })

      gsap.from(rightBlog1sRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className='bg-gray-100 max-md:relative max-md:pt-4 w-screen min-h-screen  px-24 flex flex-row 
                 max-xl:px-16 max-lg:flex-col max-lg:pt-40 max-md:px-8'
    >
      {/* LEFT SIDE */}
      <div className='text-[6rem] flex-1 text-left text-black flex flex-col max-lg:text-5xl max-md:text-4xl'>

        {/* HEADER (split text) */}
        <div ref={headerRef}>
          <h1>Huje</h1>
          <h1 className='ml-[20%] max-lg:ml-10'>Consult</h1>
          <h1 className='ml-[40%] max-lg:ml-20'>Insights</h1>
        </div>

        {/* TWO WIDE Blog POSTS */}
        <div
          ref={bottomBlog1sRef}
          className='flex flex-row gap-28 mt-10 max-lg:flex-col max-lg:gap-12'
        >
          <div className='max-w-[300px]'>
            <img className='w-[300px]' src={'/house.png'} />
            <p className='font-sans text-lg mt-2'>
              How to evaluate a neighbourhood before buying
            </p>
          </div>

          <div className='max-w-[300px]'>
            <img className='w-[300px]' src={'/modern_house.png'} />
            <p className='font-sans text-lg mt-2'>
              Tips for first-time property investors
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — TOP READS */}
      <div className='flex-col gap-6 text-black flex ml-16 max-lg:ml-0 max-lg:mt-20'>
        <h2 className='text-4xl mb-4 max-md:text-3xl'>Top Reads</h2>

        <div ref={rightBlog1sRef}>
          {[
            {title: 'Market Trends 2025'},
            {title: 'Financing Options'},
            {title: 'Maintenance Tips'},
            {title: 'Selling Strategy'},
          ].map((item, i) => (
            <div
              key={i}
              className='max-w-[400px] gap-8 items-center flex flex-row mb-6'
            >
              <img className='size-20 object-cover' src={'/house.png'} />
              <p className='font-sans text-lg'>
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog1
