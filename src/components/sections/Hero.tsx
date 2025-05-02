"use client";

import { ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ParticlesComponent from "../Custom/ParticlesComponent";
import { name, tagline, title } from "../../data/title";
import { LanguageContext } from "../../context/languageContext";

const SCROLL_DOWN =
  "invisible md:visible absolute bottom-10 mx-0 animate-float";
const SCROLL_THRESHOLD = 50;

type Props = {};

const Hero = ({}: Props) => {
  const { language } = useContext(LanguageContext);
  const [btnCls, setBtnCls] = useState(SCROLL_DOWN);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(SCROLL_DOWN + " invisible");
      } else {
        setBtnCls(SCROLL_DOWN.replace("invisible", ""));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, {});
    };
  }, []);

  return (
    <div
      id="hero"
      className="text-white h-screen flex flex-col w-full relative overflow-hidden"
    >
      <ParticlesComponent />

      <div className="absolute h-full w-full bg-black bg-opacity-20 flex flex-col justify-center gap-6 md:gap-12 xl:gap-18 items-center px-4">
        <div className="animate-fadeIn">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
            {name}
          </h1>

          <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#37BCF8] to-violet-600 inline-block text-transparent bg-clip-text mt-2">
            {title[language]}
          </p>

          <p className="text-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-3xl mx-auto mt-6 text-gray-200">
            {tagline}
          </p>
        </div>

        <a href="#about" className={btnCls} aria-label="Scroll down">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600 flex items-center justify-center shadow-lg shadow-[#37BCF8]/20 hover:shadow-xl hover:shadow-[#37BCF8]/30 transition-all duration-300 hover:scale-110">
            <ChevronDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
