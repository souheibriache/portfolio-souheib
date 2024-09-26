import {
  TbBrandGithub,
  TbBrandGmail,
  TbBrandLinkedin,
  TbPhone,
} from "react-icons/tb";
import { footer } from "../../data/title";

type Props = {};

const Footer = ({}: Props) => {
  const socialClassName =
    "hover:animate-pulse w-auto h-8 p-1.5 sm:h-10 sm:p-2 lg:h-12 xl:h-14 xl:p-2.5 2xl:h-16   bg-white bg-opacity-10 cursor-pointer hover:scale-105 transition-all  hover:opacity-80 duration-300 rounded-full";
  return (
    <div className="p-12 gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 mt-auto flex flex-wrap justify-center items-center flex-col w-full bg-[#09132e] text-[#c9e1ec] text-sm shadow-lg">
      <div className="flex flex-row gap-3 sm:gap-4 lg:gap-5 2xl:gap-6">
        <a href="https://linkedin.com" target="_blank">
          <TbBrandLinkedin className={socialClassName} />
        </a>
        <a href="https://github.com" target="_blank">
          <TbBrandGithub className={socialClassName} />
        </a>
        <a href="mailto:souheibriache@gmail.com" target="_blank">
          <TbBrandGmail className={socialClassName} />
        </a>
        <a href="tel:+33605584882" target="_blank">
          <TbPhone className={socialClassName} />
        </a>
      </div>

      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-center md:text-left p-2">
        {footer}
      </div>
    </div>
  );
};

export default Footer;
