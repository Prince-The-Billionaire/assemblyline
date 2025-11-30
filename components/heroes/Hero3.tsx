"use client"

import React, { useEffect, useRef } from "react"
import { FaArrowRight } from "react-icons/fa6"
import { IoBagOutline } from "react-icons/io5"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

const Hero3 = () => {
  const Hero3Ref = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const arrowIconRef = useRef<HTMLSpanElement>(null)
  const bagIconRef = useRef<HTMLSpanElement>(null)
  const arrivalsRef = useRef<HTMLDivElement>(null)
  const clothingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SplitText animation for "Temptimate"
      const split = new SplitText(titleRef.current, { type: "chars" })
      gsap.from(split.chars, {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power4.out",
        stagger: 0.05,
      })

      // Fade in subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        delay: 1.5,
        duration: 1,
        ease: "power2.out",
      })

      // Fade in button
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        delay: 2,
        duration: 1,
        ease: "power2.out",
      })

      // Animate "New Arrivals" images
      // Animate "New Arrivals" images in a semicircular layout
const container = arrivalsRef.current?.querySelector("div.relative")
const images = container?.querySelectorAll("img")

if (container && images) {
  const radius = 120 // adjust for arc size
  const centerX = container.clientWidth / 2
  const centerY = container.clientHeight

  const startAngle = -180 // left of arc
  const endAngle = 90    // right of arc
  const total = images.length - 1

  images.forEach((img, i) => {
    const angleDeg = startAngle + ((endAngle - startAngle) / total) * i
    const angle = angleDeg * (Math.PI / 180) // convert to radians

    const x = centerX + radius * Math.cos(angle) - img.clientWidth / 2
    const y = centerY - radius * Math.sin(angle) - img.clientHeight / 2

    gsap.set(img, {
      x,
      y,
      rotation: Math.sin(angle) * 20, // slight tilt for style
      opacity: 0,
      yPercent: 50,
      transformOrigin: "bottom center",
    })
  })

  // Animate them into view
  gsap.to(images, {
    opacity: 1,
    yPercent: 0,
    duration: 1,
    delay: 2.5,
    ease: "power3.out",
    stagger: 0.15,
  })
}

  // Animate them into view
  


      // Animate "Clothing" text after everything else
      const splitClothing = new SplitText(clothingRef.current, { type: "chars" })
      gsap.from(splitClothing.chars, {
        opacity: 0,
        y: 80,
        stagger: 0.05,
        delay: 3.5,
        ease: "power4.out",
      })
    }, Hero3Ref)

    // Hover animation for button (icon swap + color)
    const buttonEl = buttonRef.current
    const arrowEl = arrowIconRef.current
    const bagEl = bagIconRef.current
    if (buttonEl && arrowEl && bagEl) {
      gsap.set(bagEl, { opacity: 0, scale: 0 })

      buttonEl.addEventListener("mouseenter", () => {
        gsap.to(buttonEl, { backgroundColor: "#000", duration: 0.3 })
        gsap.to(arrowEl, {
          opacity: 0,
          scale: 0,
          rotate: -45,
          ease: "bounce.out",
          duration: 0.4,
        })
        gsap.to(bagEl, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "bounce.out",
          duration: 0.6,
          delay: 0.1,
        })
      })

      buttonEl.addEventListener("mouseleave", () => {
        gsap.to(buttonEl, { backgroundColor: "#92400e", duration: 0.3 })
        gsap.to(bagEl, {
          opacity: 0,
          scale: 0,
          rotate: 45,
          ease: "bounce.out",
          duration: 0.4,
        })
        gsap.to(arrowEl, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "bounce.out",
          duration: 0.6,
          delay: 0.1,
        })
      })
    }

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={Hero3Ref}
      className="h-screen bg-cover w-screen relative bg-gray-100 bg-center flex max-md:flex-col items-center justify-center overflow-hidden"
    >
      <div className="bg-[url(/models.png)] bg-fixed  z-15 w-screen h-screen absolute" />
      <div className="relative z-10 w-screen h-screen flex flex-col py-16 px-12 md:px-24 text-left">
        <div>
          <h1
            ref={titleRef}
            className="font-sansita text-black mt-2 max-md:text-center text-[2rem] md:text-[8rem] lg:text-[10rem] leading-none"
          >
            Temptimate
          </h1>
          <h2
            ref={subtitleRef}
            className="text-black/70 max-w-xl ml-2 md:ml-6 mt-4 text-xs max-md:text-center md:text-xl"
          >
            Get your luxury wears here and get any look whether alte or goth from us.
            We blend elegance and rebellion — made for those who define their own style.
          </h2>
          <button
            
            className="mt-8 max-md:mx-auto max-md:z-30 max-md:text-xs  ml-2 md:ml-6 px-6 py-3 bg-amber-800 text-white rounded-full cursor-pointer flex flex-row items-center gap-4 transition-all duration-300 relative overflow-hidden"
          >
            <p>Shop Now</p>
            <span className="relative w-6 h-6 inline-flex">
              {/* <span ref={arrowIconRef} className="absolute inset-0 flex items-center justify-center">
                <FaArrowRight className="w-6 h-6" />
              </span> */}
              <span ref={bagIconRef} className="absolute inset-0 flex items-center justify-center">
                <IoBagOutline className="w-6 h-6" />
              </span>
            </span>
          </button>
        </div>

        {/* Clothing text */}
        <h1
          ref={clothingRef}
          className="font-sansita text-black text-[2rem] max-md:z-30 max-md:text-center md:text-[8rem] md:absolute bottom-10 right-10"
        >
          Clothing
        </h1>
      </div>

      {/* Stats */}
      <div className="md:absolute  top-48 right-12 md:right-48 flex flex-col gap-2 text-black z-10">
        <p className="text-4xl md:text-6xl font-sans font-bold">320k</p>
        <p className="text-black/60">Units Sold</p>
      </div>

      {/* New Arrivals */}
      {/* New Arrivals */}
      <div
        ref={arrivalsRef}
        className="absolute bottom-30 left-6 md:left-32 flex flex-col gap-2 text-black z-10"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4">New Arrivals</h3>

        {/* Circular array container */}
        <div className="relative flex flex-row w-[100px] h-[100px] md:w-[400px] md:h-[200px]">
          <img
            src={"/image.png"}
            alt="arrival 1"
            className="absolute object-cover w-12 h-16 md:w-28 md:h-36 border-2 border-amber-800 rounded-2xl opacity-0"
          />
          <img
            src={"/image1.png"}
            alt="arrival 2"
            className="absolute object-cover w-12 h-16 md:w-28 md:h-36 border-2 border-amber-800 rounded-2xl opacity-0"
          />
          <img
            src={"/image2.png"}
            alt="arrival 3"
            className="absolute object-cover w-12 h-16 md:w-28 md:h-36 border-2 border-amber-800 rounded-2xl opacity-0"
          />
        </div>
      </div>

    </div>
  )
}

export default Hero3
