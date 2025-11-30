"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero4 = () => {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const supportImgRef = useRef<HTMLImageElement>(null);



  const handleActionButton = (url: string) => {
    
    router.push(url);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".hero-headline");
      //@ts-expect-error splittext types are causing issues
      const splitTexts = sections.map((el) => new SplitText(el, { type: "words, chars" }));

      // Hide all initially
      splitTexts.forEach((split) => gsap.set(split.chars, { opacity: 0, y: 40 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
        
      });

      // Sequential animation
      splitTexts.forEach((split, i) => {
        tl.to(
          split.chars,
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 1,
            ease: "power2.out",
          },
          i * 0.5 // delay between each text block
        );

        // Animate clarimind image when "Mental" text animates
        if (i === 1 && imageRef.current) {
          tl.fromTo(
            imageRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.8, ease: "power2.out" },
            "<0.1" // just after the "Mental" text starts animating
          );
        }
      });

      // Hero support image pop in/out
      if (supportImgRef.current) {
        gsap.fromTo(
          supportImgRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.7)",
            duration: 1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 80%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-screen min-h-screen relative bg-gray-50 overflow-hidden"
    >
      {/* TEXT SECTION */}
      <div className="flex flex-col justify-center text-left pt-36 font-clarimind text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl px-6 sm:px-12 md:px-24 lg:px-48 h-full space-y-4">
        <h1 className="hero-headline">Rewriting</h1>

        <div className="ml-0 sm:ml-[10%] md:ml-[18%] lg:ml-[24%] flex flex-row flex-wrap items-center gap-6 sm:gap-10 md:gap-12">
          <h1 className="hero-headline mt-3">Mental</h1>
          <img
            ref={imageRef}
            src={"/clarimind2.png"}
            alt="clarimind"
            className="rounded-2xl object-cover h-20 sm:h-24 md:h-28 lg:h-32 w-60 sm:w-72 md:w-80 lg:w-96"
          />
        </div>

        <h1 className="hero-headline ml-0 sm:ml-[20%] md:ml-[30%] lg:ml-[40%]">
          Health
        </h1>

        <div className="flex flex-row md:flex-wrap items-end ml-0 sm:ml-[8%] md:ml-[12%] lg:ml-[18%] gap-8 sm:gap-8 md:gap-16 lg:gap-20">
          <h1 className=" bg-gradient-to-b from-lime-400 to-purple-600 text-transparent bg-clip-text scale-[250%]">
            1
          </h1>
          <h1 className="hero-headline">Mind At A Time</h1>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-12 mb-24 px-6">
        <button
          onClick={() =>
            handleActionButton(
              "https://chat.whatsapp.com/LTHg0zpKaJjKdXQwYV60my"
            )
          }
          className="px-6 sm:px-8 py-3 sm:py-4 bg-lime-500
          cursor-pointer text-white text-base sm:text-lg md:text-xl font-semibold rounded-xl 
          hover:bg-lime-400 transition border-t-2 border-white/30 shadow-lg"
        >
          Join Community
        </button>

        <button
          onClick={() => handleActionButton("/about")}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-lime-400 text-black text-base sm:text-lg md:text-xl font-semibold rounded-xl hover:bg-white/10 transition shadow-lg"
        >
          Learn More
        </button>
      </div>

      {/* SUPPORT IMAGE */}
      <img
        ref={supportImgRef}
        className="absolute top-[-10%] right-[-5%] size-60 sm:size-72 md:size-80 lg:size-96 object-contain"
        alt="hero support"
        src={"/hero-support.png"}
      />
    </div>
  );
};

export default Hero4;
