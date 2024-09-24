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
    "hover:animate-pulse h-12 w-12 p-2 bg-white bg-opacity-10 cursor-pointer hover:scale-105 transition-all  hover:opacity-80 duration-300 rounded-full";
  return (
    <div className="p-12 gap-3 mt-auto flex flex-wrap justify-center items-center flex-col w-full bg-[#09132e] text-[#c9e1ec] text-sm shadow-lg">
      <div className="flex flex-row gap-5 ">
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

      <div className=" font-semibold text-center md:text-left p-2">
        {footer}
      </div>
    </div>
  );
};

export default Footer;
