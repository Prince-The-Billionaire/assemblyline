"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { IoBagAdd } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Store1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const Store1_categories = [
    "Skincare",
    "Makeup",
    "Haircare",
    "Serums",
    "Moisturizers",
    "Cleansers",
    "Sunscreens",
    "Masks",
  ];

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;

    const split = new SplitText(titleRef.current, {
      type: "chars",
    });
    const chars = split.chars;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
      .from(chars, {
        x: 40,
        opacity: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(
        categoriesRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        productsRef.current?.children || [],
        {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col md:flex-row items-start px-6 md:px-16 text-black justify-center bg-gray-100 py-16 gap-12"
    >
      {/* LEFT SIDE — TITLE + CATEGORIES */}
      <div className="flex flex-col w-full md:w-[30%]">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-semibold font-sansita"
        >
          Our Products
        </h1>

        {/* 🔍 SEARCH BAR — Glassmorphic */}
        <div className="mt-6 backdrop-blur-lg bg-white/20 border border-pink-800/30 rounded-full px-4 py-3 flex items-center gap-3 shadow-lg">
          <svg
            className="w-6 h-6 text-pink-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16" y1="16" x2="21" y2="21" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none placeholder-black/50 w-full text-black"
          />
        </div>

        {/* CATEGORY LIST */}
        <div ref={categoriesRef} className="mt-8">
          {Store1_categories.map((category) => (
            <div
              key={category}
              className="border border-black/20 rounded-2xl p-6 m-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <h2 className="text-2xl">{category}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — PRODUCTS GRID */}
      <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <div
            key={product}
            className="flex flex-row max-md:flex-col justify-between gap-10 border border-black/20 bg-pink-50/20 rounded-2xl p-6 m-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <div>
              <h2 className="text-2xl text-black/80 font-semibold">
                Cerave facial cleanser
              </h2>
              <p className="text-black/60">
                A gentle cleanser that effectively removes dirt, oil, and makeup without stripping the skin's natural moisture.
              </p>
              <p className="font-bold text-5xl mt-2">$45.00</p>

              <button className="flex flex-row cursor-pointer text-white bg-pink-800 px-4 py-2 rounded-full mt-4 items-center gap-2 hover:scale-105 transition-transform">
                <IoBagAdd />
                Add to Cart
              </button>
            </div>

            <Image
              src="/image1.png"
              alt="Product 1"
              width={300}
              height={400}
              className="rounded-2xl w-40 h-40 object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store1;
