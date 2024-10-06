import ButtonWithImage from "./ButtonWithImage";
import { SquareArrowOutUpRight } from "lucide-react";
import javascript from "../../assets/skills/js.png";
import typescript from "../../assets/skills/typescript.png";
import angular from "../../assets/skills/angular.png";
import nestjs from "../../assets/skills/nestjs.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { visiter } from "../../data/componentsText";

type Props = {
  name: string;
  img: string;
  description: string;
  link: string;
  skills?: string[];
};

const Card = ({
  name,
  img,
  description,
  link,
  skills = [javascript, typescript, angular, nestjs],
}: Props) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="w-full shadow-lg bg-[#1f2945] rounded-lg flex flex-col items-center h-full md:max-h-none lg:max-h-[28rem] xl:max-h-[35rem] 2xl:max-h-[49rem] ">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-end">
        <div className="w-full relative group">
          <img
            src={img}
            className="h-auto w-full object-contain rounded-lg pb-4"
          />
          <div className="absolute -top-full group-hover:top-0 duration-300 gap-2 w-full justify-center items-center h-fit pt-5  bg-black bg-opacity-30 flex flex-row flex-wrap">
            {skills.map((skill, index) => (
              <img
                className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 2xl:h-20 w-auto object-cover p-1 rounded-sm md:p-1.5 md:rounded-md lg:p-2 lg:rounded-lg xl:rounded-xl xl:p-3 bg-white bg-opacity-30 mb-3"
                key={index}
                src={skill}
              />
            ))}
          </div>
        </div>
        <div className="text-lg xl:text-2xl 2xl:text-4xl font-semibold pb-2 mx-4 text-[#37BCF8]">
          {name}
        </div>
        <div className="w-11/12 h-1/2 overflow-y-auto  leading-loose text-xs xl:text-base 2xl:text-xl mx-auto pb-2">
          {description}
        </div>
        <div className="w-1/2 xl:w-1/2 lg:w-3/4 sm:w-1/2 max-[500px]:w-10/12 py-4 mt-5">
          <a href={link} target="_blank" rel="noreferrer">
            <ButtonWithImage
              icon={
                <SquareArrowOutUpRight className="h-5 md:h-6 lg:h-5 xl:h-8 2xl:h-10 w-auto" />
              }
              label={visiter[language]}
              imageStyle="w-1/6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
