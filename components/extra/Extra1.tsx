"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Extra1 = () => {
  const textRef = useRef(null)
  const containerRef = useRef(null)
  const imageSectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ------------------------------
         TEXT SKEW + PIN ANIMATION
      ------------------------------ */
      gsap.fromTo(
        textRef.current,
        {
          x: -200,
          opacity: 0,
          skewX: 35,      // STRONG SKEW
          scale: 0.85,
        },
        {
          x: 0,
          opacity: 1,
          skewX: 0,       // RETURNS TO NORMAL
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      )

      // PIN the text while scrolling the images
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "top+=700 top",
        pin: textRef.current,
        pinSpacing: true,
      })

      /* ------------------------------
         IMAGE FADE UP (NORMAL)
      ------------------------------ */
      gsap.from(".fade-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
      })

      /* ------------------------------
         MASK TRANSITION ANIMATION
         (Normal → Masked shape)
      ------------------------------ */
      gsap.from(".mask-image, .mask-image1", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        maskSize: "0% 0%",       // starts unmasked
        WebkitMaskSize: "0% 0%",
        duration: 1.8,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="
        w-screen h-screen text-black grid grid-cols-2 px-36 bg-gray-100
        gap-6
        max-xl:px-20 
        max-lg:grid-cols-1 max-lg:px-10 max-lg:text-center
      "
    >
      {/* LEFT TEXT (Pinned + Animated) */}
      <div ref={textRef} className="flex flex-col max-md:pt-8 pt-28">
        <h1 className="text-8xl mt-2 font-sansita font-bold max-lg:text-6xl">
          NEW ARRIVALS
        </h1>
        <p className="text-lg mt-2 opacity-80 max-lg:text-base">
          these are some of our newest products tailored for you this festive period
        </p>
      </div>

      {/* RIGHT IMAGES */}
      <div ref={imageSectionRef} className="flex flex-col gap-6 items-start max-lg:items-center">
        
        <img
          src="/christmas.png"
          className="w-[500px] max-md:w-48 rounded-2xl fade-image mask-image"
        />

        <img
          src="/furcoat.png"
          className="w-[500px] max-md:w-48 object-top rounded-2xl fade-image mask-image1"
        />

        <img
          src={'/gymwears.png'}
          alt="gymwears"
          className="w-[500px] max-md:w-48 h-[300px] object-top object-cover rounded-2xl fade-image"
        />

      </div>
    </div>
  )
}

export default Extra1
