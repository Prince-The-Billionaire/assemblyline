"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import { FaSnowflake } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"

gsap.registerPlugin(ScrollTrigger, SplitText)

const accent = "#3b2f2f"

const profiles = [
  { letter: "A", bg: "bg-yellow-400" },
  { letter: "B", bg: "bg-pink-400" },
  { letter: "C", bg: "bg-green-400" },
  { letter: "D", bg: "bg-indigo-400" },
  { letter: "E", bg: "bg-red-400" },
]

const Proof3: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const numberRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const pointsRef = useRef<HTMLDivElement | null>(null)
  const profilesRef = useRef<HTMLDivElement | null>(null)
  const starsRef = useRef<HTMLDivElement | null>(null)
  const marqueeRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // marquee scroll
    if (marqueeRef.current) {
      gsap.fromTo(
        marqueeRef.current,
        { xPercent: 0 },
        { xPercent: -50, duration: 10, repeat: -1, ease: "linear" }
      )
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 75%",
      },
    })

    // Number pop
    tl.from(numberRef.current, {
      y: 20,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out",
    })

    // CHARACTER SPLITTEXT ANIMATION
    if (headingRef.current) {
      const split = new SplitText(headingRef.current, {
        type: "chars",
        charsClass: "split-char",
      })

      tl.from(
        split.chars,
        {
          opacity: 0,
          y: 40,
          rotateX: 60,
          stagger: 0.02,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.2"
      )
    }

    // Bullet points fade
    tl.from(pointsRef.current?.children || [], {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.45,
      ease: "power2.out",
    })

    // Profiles
    tl.from(profilesRef.current?.children || [], {
      opacity: 0,
      x: -10,
      stagger: 0.12,
      duration: 0.45,
    })

    // Stars
    tl.from(starsRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    })

    // MOBILE IMAGE SCALE ON SCROLL
    gsap.to(imageRef.current, {
      scale: 1.15,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section ref={rootRef} className="relative min-h-screen overflow-hidden">
      {/* Marquee */}
      <div className="w-full overflow-hidden bg-white/20 backdrop-blur-sm py-2">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex gap-10 text-lg sm:text-xl font-bold px-6 items-center"
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 text-black">
              <FaSnowflake size={20} /> Christmas Sales • 30% OFF
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT: mobile = stacked, desktop = side-by-side */}
      <div className="
        max-w-7xl mx-auto px-4 py-10 
        grid grid-cols-1 md:grid-cols-2 
        gap-10 items-center
      ">
        
        {/* LEFT — TEXT */}
        <div className="order-1 md:order-1">
          <div ref={numberRef} className="text-3xl sm:text-4xl font-bold text-black mb-4">
            300k+ items sold
          </div>

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black font-salsa leading-tight mb-4"
          >
            Discover the glow your skin deserves.
          </h2>

          <div ref={pointsRef} className="space-y-2 text-black/90 mb-6">
            <div>• Solves acne problems</div>
            <div>• Gentle, dermatologist-tested</div>
            <div>• Cruelty-free and eco-friendly</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div ref={profilesRef} className="-space-x-4 flex items-center">
                {profiles.map((p, i) => (
                  <div
                    key={i}
                    className={`${p.bg} text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold ring-2 ring-white`}
                  >
                    {p.letter}
                  </div>
                ))}
              </div>
              <span className="ml-4 text-sm text-black/80">200+ reviews</span>
            </div>

            <div ref={starsRef} className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <AiFillStar key={i} size={22} color={accent} />
                ))}
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div
          ref={imageRef}
          className="
            order-2 md:order-2 
            rounded-lg overflow-hidden 
            h-[60vh] bg-cover bg-center
          "
          style={{ backgroundImage: "url('/beauty1.png')" }}
        />
      </div>
    </section>
  )
}

export default Proof3
