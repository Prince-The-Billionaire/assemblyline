"use client";

import React, { useEffect, useRef } from "react";
import { FaGlobe, FaUserCheck, FaChalkboardTeacher, FaHeart } from "react-icons/fa";
import gsap from "gsap";
// import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <FaUserCheck className="text-lime-500" size={28} />,
    label: "Lives Impacted",
    value: "200+",
  },
  {
    icon: <FaChalkboardTeacher className="text-lime-500" size={28} />,
    label: "Sessions Held",
    value: "200+",
  },
  {
    icon: <FaGlobe className="text-lime-500" size={28} />,
    label: "Global Reach",
    value: "Worldwide",
  },
];

const hearts = [
  { top: "10%", left: "15%", size: 28, delay: 0 },
  { top: "20%", right: "10%", size: 22, delay: 0.2 },
  { bottom: "15%", left: "20%", size: 24, delay: 0.4 },
  { bottom: "10%", right: "15%", size: 32, delay: 0.6 },
  { top: "50%", left: "5%", size: 18, delay: 0.8 },
];

const Proof2 = () => {
  const containerRef = useRef(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const heartRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });

    // Headline SplitText animation
    if (headlineRef.current) {
      // const split = new SplitType(headlineRef.current, { types: "words,chars" });
      tl.from(headlineRef.current.querySelectorAll(".char"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.035,
      });
    }

    // Subtext fade in
    tl.from(subtextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    }, "+=0.2");

    // Stats fade in (stacked, one by one)
    const boxes = gsap.utils.toArray(".proof-card");
    tl.from(boxes, {
      opacity: 0,
      y: 50,
      stagger: 0.35,
      duration: 1,
      ease: "power2.out",
    }, "+=0.2");

    // Image fade in from right
    tl.from(imageRef.current, {
      opacity: 0,
      x: 80,
      duration: 1.2,
      ease: "power2.out",
    }, "+=0.2");

    // Floating hearts animation (after image appears)
    heartRefs.current.forEach((ref, i) => {
      if (ref) {
        tl.fromTo(
          ref,
          { opacity: 0, scale: 0.7, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "back.out(2)",
            delay: hearts[i].delay,
            onComplete: () => {
              gsap.to(ref, {
                y: "-=16",
                repeat: -1,
                yoyo: true,
                duration: 2.5 + Math.random(),
                ease: "sine.inOut",
              });
            },
          },
          "-=0.7"
        );
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-screen py-16 px-4 md:px-8 bg-gray-50 text-gray-900 relative"
      
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1 w-full">
          <h2
            ref={headlineRef}
            className="font-bold text-3xl font-clarimind sm:text-4xl md:text-5xl xl:text-6xl mb-4 text-black"
          >
            <span className="text-lime-500">Over 20 million </span> Nigerians suffer silently
          </h2>
          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-black/60 mb-8"
          >
            Millions face mental health challenges without support. Clarimind is
            here to break the silence, offering hope, comfort, and healing through
            technology and community.
          </p>
          {/* Stats (stacked) */}
          <div
            ref={statsRef}
            className="flex flex-col gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="proof-card flex flex-row items-center gap-4 p-0"
              >
                {stat.icon}
                <div>
                  <p className="text-2xl font-bold text-black">{stat.value}</p>
                  <p className="text-black/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image with floating hearts */}
        <div
          ref={imageRef}
          className="flex-1 w-full flex justify-center items-center relative"
        >
          <img
            src="/clarimind_2.png"
            alt="Clarimind Impact"
            className="rounded-3xl w-full max-w-[450px] h-auto object-cover"
          />
          {/* Floating hearts */}
          {hearts.map((pos, i) => (
            <div
              key={i}
              ref={el => { heartRefs.current[i] = el; }}
              style={{
                position: "absolute",
                ...("top" in pos ? { top: pos.top } : {}),
                ...("bottom" in pos ? { bottom: pos.bottom } : {}),
                ...("left" in pos ? { left: pos.left } : {}),
                ...("right" in pos ? { right: pos.right } : {}),
                pointerEvents: "none",
                zIndex: 2,
              }}
            >
              <FaHeart
                size={pos.size}
                className="text-red-500 drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Semicircle cutout at bottom */}
      {/* <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-24 bg-white"
        style={{
          clipPath: "ellipse(50% 100% at 50% 0%)",
        }}
      /> */}
    </section>
  );
};

export default Proof2;
