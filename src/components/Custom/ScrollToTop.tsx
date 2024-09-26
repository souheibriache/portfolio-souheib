import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

type Props = {};

const DEFAULT_BTN_CLS =
  "fixed bottom-4 right-4 h-8 w-8 p-1 sm:bottom-6 sm:right-6 sm:h-8 sm:w-8 sm:p-1.5 xl:bottom-8 xl:right-8 xl:h-12 xl:w-12 xl:p-2  2xl:bottom-16 2xl:right-16 2xl:h-20 2xl:w-20 2xl:p-3 z-50 flex items-center rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = ({}: Props) => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

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
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp className="text-white h-full w-auto" />
    </button>
  );
};

export default ScrollToTop;
