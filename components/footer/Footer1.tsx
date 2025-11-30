"use client";
import React, { useEffect, useRef } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer1 = () => {
  const Footer1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Footer1Ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: Footer1Ref.current,
            start: "top 90%",
          },
        }
      );
    }, Footer1Ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={Footer1Ref}
      className="bg-gray-100 min-h-screen flex flex-col justify-end items-center text-white"
    >
      <div className="bg-pink-100  p-6 py-8 min-h-[90%] w-full rounded-t-4xl shadow-lg">
        <div className="bg-black/80 w-auto mx-2 md:mx-24 p-4 md:p-16 rounded-4xl flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand Section */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                RICHBECKY
              </h1>
              <p className="text-lg text-white/60 max-w-lg max-md:max-w-sm mt-4 leading-relaxed">
                Richbecky is your go-to online store for trendy and affordable skincare products that enhance your natural beauty.
              </p>
              <div className="text-3xl max-md:text-xl flex flex-row gap-6 mt-8 text-white/80">
                <IoLogoInstagram className="cursor-pointer hover:text-pink-400 transition" />
                <IoLogoWhatsapp className="cursor-pointer hover:text-pink-400 transition" />
                <IoLogoLinkedin className="cursor-pointer hover:text-pink-400 transition" />
                <IoLogoFacebook className="cursor-pointer hover:text-pink-400 transition" />
                <IoLogoYoutube className="cursor-pointer hover:text-pink-400 transition" />
              </div>
            </div>

            {/* Footer1 Links */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 text-white/80">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Products
                </h2>
                <ul className="flex flex-col gap-2 text-white/70 text-sm">
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Skincare
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Makeup
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Haircare
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Serums
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Company</h2>
                <ul className="flex flex-col gap-2 text-white/70 text-sm">
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    About Us
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Blog
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Careers
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Contact
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Support
                </h2>
                <ul className="flex flex-col gap-2 text-white/70 text-sm">
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    FAQs
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Privacy Policy
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Terms of Service
                  </li>
                  <li className="hover:text-pink-300 cursor-pointer transition">
                    Help Center
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-white/20 mt-8"></div>

          {/* Copyright */}
          <p className="text-center text-white/60 text-sm md:text-base mt-4">
            © {new Date().getFullYear()} Richbecky Collections. All rights reserved.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer1;
