"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

type Props = {};

const DEFAULT_BTN_CLS =
  "fixed bottom-4 right-4 h-8 w-8 p-1 sm:bottom-6 sm:right-6 sm:h-10 sm:w-10 sm:p-1.5 xl:bottom-8 xl:right-8 xl:h-10 xl:w-10 xl:p-2 2xl:bottom-10 2xl:right-10 2xl:h-12 2xl:w-12 2xl:p-2 z-50 flex items-center justify-center rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600 hover:shadow-lg hover:shadow-[#37BCF8]/30 transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = ({}: Props) => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, {});
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
      <ArrowUp className="text-white h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6" />
    </button>
  );
};

export default ScrollToTop;
