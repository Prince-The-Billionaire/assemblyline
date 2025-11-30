// Proof1.jsx
"use client";

import React, { useEffect, useRef } from "react";
import { IoIosPricetag } from "react-icons/io";
import gsap from "gsap";
// @ts-ignore - SplitText may not have types in some setups
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Proof1 = () => {
  const rootRef = useRef(null);

  // refs for elements we animate (added only as refs, no structural changes)
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroImageRef = useRef(null);

  // group refs for the three clothing blocks (the divs that are absolute in your layout)
  const clothingGroupRefs = useRef([]);

  clothingGroupRefs.current = []; // ensure fresh list

  interface ClothingGroupElement extends HTMLElement {}

  const addClothingRef = (el: ClothingGroupElement | null) => {
    if (el && !(clothingGroupRefs.current as ClothingGroupElement[]).includes(el)) {
      (clothingGroupRefs.current as ClothingGroupElement[]).push(el);
    }
  };

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Master timeline played by ScrollTrigger when the section enters view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%", // when top of section hits 75% viewport height
          end: "bottom 25%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      // SplitText for the full headline (Option A: animate the whole line together)
      const split = new SplitText(titleRef.current, { type: "chars" });
      gsap.set(titleRef.current, { opacity: 1 });

      tl.from(split.chars, {
        duration: 0.9,
        opacity: 0,
        y: 60,
        rotationX: -20,
        ease: "power4.out",
        stagger: 0.03,
      });

      // Subtitle fades in next
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 24,
          duration: 0.75,
          ease: "power2.out",
        },
        "-=0.35"
      );

      // Hero image pans in from the right (keeps its absolute place)
      tl.from(
        heroImageRef.current,
        {
          x: 160,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // Arc-like animation for clothing groups
      // We'll animate each group div (which contains the img + text) from an arc-like start
      const groups = clothingGroupRefs.current.slice(0, 3); // preserve exact three groups you placed

      // Compute a curved start offset for each group and animate into place
      groups.forEach((el, i) => {
        // Determine start offsets to simulate arc entry
        // first -> comes from left-bottom, second -> from below, third -> from right-bottom
        const fromOffsets = [
          { x: -180, y: 140, rotate: -12 },
          { x: -20, y: 180, rotate: -6 },
          { x: 160, y: 120, rotate: 10 },
        ];

        const from = fromOffsets[i] || { x: -80, y: 140, rotate: 0 };

        // Set initial state using from
        gsap.set(el, { opacity: 0, x: from.x, y: from.y, rotation: from.rotate });

        // animate into their exact DOM positions (x:0,y:0 relative to their current)
        tl.to(
          el,
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.25"
        );
      });

      // cleanup split
      tl.call(() => {
        try {
          split.revert();
        } catch {}
      });
    }, rootRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={rootRef} className="w-screen min-h-screen bg-gray-100">
      <div className="w-full overflow-hidden bg-gray-100 py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex flex-row gap-6 items-center mr-10">
            <IoIosPricetag className="text-black text-4xl max-md:text-xl" />
            <p className="text-black text-4xl max-md:text-xl font-bold">BLACK FRIDAY SALES 20% OFF</p>
          </div>

          <div className="flex flex-row gap-6 items-center mr-10">
            <IoIosPricetag className="text-black text-4xl max-md:text-xl" />
            <p className="text-black text-4xl max-md:text-xl font-bold">BLACK FRIDAY SALES 20% OFF</p>
          </div>

          <div className="flex flex-row gap-6 items-center mr-10">
            <IoIosPricetag className="text-black text-4xl max-md:text-xl" />
            <p className="text-black text-4xl max-md:text-xl font-bold">BLACK FRIDAY SALES 20% OFF</p>
          </div>

          <div className="flex flex-row gap-6 items-center mr-10">
            <IoIosPricetag className="text-black text-4xl max-md:text-xl" />
            <p className="text-black text-4xl max-md:text-xl font-bold">BLACK FRIDAY SALES 20% OFF</p>
          </div>

          <div className="flex flex-row gap-6 items-center mr-10">
            <IoIosPricetag className="text-black text-4xl max-md:text-xl" />
            <p className="text-black text-4xl max-md:text-xl font-bold">BLACK FRIDAY SALES 20% OFF</p>
          </div>
        </div>
      </div>

      <div className="relative w-screen min-h-screen max-md:px-6 max-md:mt-12 md:pb-36 px-24 mt-36">
        <h2
          ref={titleRef}
          className="font-sansita text-8xl max-md:text-3xl font-bold text-black"
        >
          Quality <span className="text-amber-800">Fashion</span> You Can Afford <br />
        </h2>

        <h3
          ref={subtitleRef}
          className="text-black/60 font-semibold max-md:text-xl text-4xl"
        >
          From Corporate Fits to Everyday Style
        </h3>

        {/* keep exact image element and classes — only added ref */}
        <img
          ref={heroImageRef}
          src={"/Proof1.png"}
          className="object-bottom right-0 top-[30%]  z-15 max-md:w-[80vw] w-[32vw] absolute"
        />

        <div className="max-md:hidden">
          <div className="size-[400px] rounded-full border-6 border-black/50 absolute -left-36 top-[40%]" />

          {/* first clothing group (exact same structure, just add ref via callback) */}
          <div
            ref={addClothingRef}
            className="absolute bottom-10 left-24 flex flex-row gap-10 items-center"
          >
            <img
              className="size-36 border-amber-800 rounded-2xl border-2"
              src={"/shirt1.png"}
            />
            <p className="text-3xl text-black">
              Corporate <span className="text-amber-800">Shirts</span>
            </p>
          </div>

          {/* second group */}
          <div
            ref={addClothingRef}
            className="absolute  bottom-56 left-48 flex flex-row gap-10 items-center"
          >
            <img
              className="size-36  border-amber-800 rounded-2xl border-2"
              src={"/shirt1.png"}
            />
            <p className="text-3xl text-black">
              Casual <span className="text-amber-800">Shirts</span>
            </p>
          </div>

          {/* third group */}
          <div
            ref={addClothingRef}
            className="absolute bottom-[50%] left-20 flex flex-row gap-10 items-center"
          >
            <img
              className="size-36 border-amber-800 rounded-2xl border-2"
              src={"/shirt1.png"}
            />
            <p className="text-3xl text-black">
              Corporate <span className="text-amber-800">Shirts</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proof1;
