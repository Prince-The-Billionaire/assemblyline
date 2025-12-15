"use client";

import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact1 = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const split = new SplitText(headingRef.current?.querySelectorAll("h1"), {
      type: "chars",
    });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.04,
      ease: "power4.out",
      duration: 1,
    });

    gsap.from(arrowRef.current, {
      scrollTrigger: {
        trigger: arrowRef.current,
        start: "top 85%",
      },
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left center",
      ease: "power3.out",
      duration: 1,
    });

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
      x: 150,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-gray-100 w-screen max-md:px-2 md:px-24 flex flex-col lg:flex-row h-full lg:h-screen py-24 lg:py-0 gap-16">
      {/* LEFT SIDE */}
      <div
        ref={headingRef}
        className="text-7xl text-black flex flex-col justify-center"
      >
        <h1>Contact</h1>
        <h1 className="ml-[8%]">Huje</h1>
        <h1 className="ml-[12%]">Consult</h1>

        <img
          ref={arrowRef}
          src={"/new_arrow.png"}
          alt="new arrow"
          className="w-[80%] mt-12 object-contain"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div
        ref={formRef}
        className="bg-black rounded-2xl flex flex-col p-10 h-fit w-full lg:w-[40%] text-white self-center"
      >
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-white/70 text-lg mb-10">
          For property enquiries, valuations, or to schedule a viewing, contact
          Huje Consult and our team will assist you.
        </p>

        <label className="text-xl font-semibold mb-2">Your Name</label>
        <input
          type="text"
          className="bg-transparent border-b border-white/40 focus:border-white outline-none py-2 mb-6 text-lg"
          placeholder="Enter your full name"
        />

        <label className="text-xl font-semibold mb-2">Your Email</label>
        <input
          type="email"
          className="bg-transparent border-b border-white/40 focus:border-white outline-none py-2 mb-6 text-lg"
          placeholder="Enter your email"
        />

        <button className="flex flex-row gap-3 items-center bg-sky-400 px-6 py-3 mt-4 rounded-xl text-black font-bold hover:bg-sky-500 transition-all hover:scale-[1.03]">
          <IoSend className="text-2xl" />
          Send Message
        </button>

        <div className="text-3xl flex flex-row gap-6 mt-12 text-white/70">
          <FaFacebook className="hover:text-white transition" />
          <FaInstagram className="hover:text-white transition" />
          <FaTwitter className="hover:text-white transition" />
          <FaYoutube className="hover:text-white transition" />
        </div>
      </div>
    </div>
  );
};

export default Contact1;
