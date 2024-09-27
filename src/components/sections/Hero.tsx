import { Mouse } from "lucide-react";
import { useEffect, useState } from "react";
import ParticlesComponent from "../Custom/ParticlesComponent";

const SCROLL_DOWN = "invisible md:visible animate-cb absolute bottom-16 mx-0";
const SCROLL_THRESHOLD = 50;
type Props = {};
const Hero = ({}: Props) => {
  const [btnCls, setBtnCls] = useState(SCROLL_DOWN);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(SCROLL_DOWN + "invisible");
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

      <div className="absolute h-full w-full bg-black bg-opacity-20 flex flex-col justify-center gap-6 md:gap-12 xl:gap-18 items-center px-4    ">
        <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-semibold">
          RIACHE SOUHEIB
        </p>
        <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-semibold bg-gradient-to-r from-[#37BCF8] to-violet-600 inline-block text-transparent bg-clip-text">
          Développeur web Junior.
        </p>
        <p className="text-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl">
          Make it work, Make it better, Make it faster...
        </p>

        <button className={btnCls}>
          <a href="#about">
            <Mouse className="h-8 w-6 md:h-12 md:w-8 xl:h-16 xl:w-10 2xl:h-28 2xl:w-20  rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
