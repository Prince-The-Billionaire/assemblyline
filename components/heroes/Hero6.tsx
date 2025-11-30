"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(SplitText)

const Hero6 = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Split the title into characters
    const split = new SplitText(titleRef.current, { type: "chars" })

    gsap.from(split.chars, {
      y: 80,
      opacity: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1.2,
    })

    gsap.from(subtitleRef.current, {
      y: 60,
      opacity: 0,
      ease: "power3.out",
      duration: 1,
      delay: 0.8,
    })

    gsap.from(descRef.current, {
      y: 50,
      opacity: 0,
      ease: "power3.out",
      duration: 1,
      delay: 1.0,
    })

    gsap.from(btnRef.current, {
      y: 40,
      opacity: 0,
      ease: "power3.out",
      duration: 1,
      delay: 1.3,
    })
  }, [])

  return (
    <div className="bg-[url(/beautyimage.png)] relative bg-fixed min-h-screen w-screen max-md:bg-bottom-right max-md:bg-cover flex max-md:flex-col-reverse max-md:justify-center max-md:items-center items-end justify-end">
      <h1
        ref={titleRef}
        className="text-9xl max-md:text-3xl max-md:bottom-0 max-md:absolute  font-bold  text-white text-shadow-2xs mx-6 text-shadow-black"
      >
        RICHBECKY BEAUTY
      </h1>

      <div className="md:absolute max-md:px-4 top-1/2 max-md:justify-center  left-20 flex flex-col justify-start">
        <h2 ref={subtitleRef} className="font-semibold max-md:text-2xl max-md:text-white text-5xl">
          Your Beauty Begins Here
        </h2>

        <p ref={descRef} className="text-xl max-md:text-base max-md:text-white/70 text-black/70">
          Skincare, serums, lip care — everything you need to start your skincare journey.
        </p>

        <button
          ref={btnRef}
          className="bg-pink-600 text-white p-4 rounded-2xl mt-4"
        >
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Hero6
