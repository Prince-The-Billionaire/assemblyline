"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiCircleChevLeft } from "react-icons/ci";
import { IoChevronForwardCircle } from "react-icons/io5";

gsap.registerPlugin(SplitText, ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Very affordable prices for such high-quality products. My skin has never felt better!",
  },
  {
    id: 2,
    text: "I love how Richbecky Collections prioritizes natural ingredients. My skin feels nourished and radiant.",
  },
  {
    id: 3,
    text: "The customer service is outstanding. They really care about their customers' satisfaction.",
  },
];

const Testimonials2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, { type: "words, chars" });
      const chars = split.chars;

      gsap.set(chars, { opacity: 0, y: 80 });
      gsap.set(contentRef.current, { opacity: 0, y: 40 });
      gsap.set(cardsRef.current, { opacity: 0, x: -60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "power3.out",
        duration: 1.2,
      })
        .to(headlineRef.current, {
          x: "-6vw",
          y: "-32vh",
          scale: 0.7,
          duration: 1.2,
          ease: "power3.inOut",
          delay: 0.4,
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            x: 0,
            stagger: 0.25,
            duration: 0.9,
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
      className="w-screen min-h-screen bg-gray-50 relative flex max-md:flex-col px-6 sm:px-16 md:px-28 lg:px-36 items-center overflow-hidden"
    >
      {/* HEADLINE */}
      <h1
        ref={headlineRef}
        className="text-black font-clarimind text-4xl sm:text-5xl md:text-6xl lg:text-8xl md:absolute"
      >
        What Our <span className="text-pink-400">Client</span> Say
      </h1>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="flex flex-col text-left w-full space-y-8 mb:mt-32"
      >
        {/* Subtext + Chevron Controls */}
        <div className="flex flex-row max-md:flex-col relative z-50 justify-between mt-10 items-start">
          <h2 className="text-black/70 text-lg sm:text-xl md:text-2xl max-md:w-full max-w-4xl font-light px-2 sm:px-4 leading-relaxed">
            Richbecky collections has the best serums, moisturizers, and beauty products that have transformed my skincare routine. The quality and effectiveness are unmatched!
          </h2>
          <div className="text-5xl text-pink-400 flex  order-3 z-50 flex-row gap-6 pr-2">
            <CiCircleChevLeft
              className="text-black hover:text-pink-400 transition cursor-pointer"
              onClick={handlePrev}
            />
            <IoChevronForwardCircle
              className="hover:text-pink-500 transition cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 relative min-h-[220px]">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
            //   ref={(el) => {
            //     if (el) cardsRef.current[i] = el;
            //   }}
              className={`absolute transition-all duration-700 ease-in-out transform w-[90%] sm:w-3xl bg-white p-6 shadow-md rounded-2xl border border-gray-100 ${
                i === current
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95 pointer-events-none"
              }`}
            >
              <img className="size-16 mb-3" src={"/quotes.png"} alt="quotes" />
              <p className="text-gray-700 italic text-xl max-w-6xl">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-pink-500 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <img className="absolute size-72 order-1 z-1 -top-20 right-10 max-md:hidden " src={"/upquotes.png"} alt="up qoutes"/>
      <img className="absolute size-5xl scale-150 z-10 top-10 max-md:hidden left-[-24%] opacity-40" src={"/gradients/gradient1.png"} alt="down qoutes"/>
    </div>
  );
};

export default Testimonials2;
