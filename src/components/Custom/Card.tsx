"use client";

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
    <div className="w-full shadow-xl bg-[#1f2945] rounded-lg flex flex-col items-center h-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#37BCF8]/20 hover:translate-y-[-5px] md:max-h-none lg:max-h-[28rem] xl:max-h-[35rem] 2xl:max-h-[49rem] overflow-hidden group">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-end w-full">
        <div className="w-full relative overflow-hidden">
          <img
            src={img || "/placeholder.svg"}
            className="h-auto w-full object-contain rounded-t-lg transition-transform duration-700 group-hover:scale-105"
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2945] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
            <div className="flex flex-wrap justify-center gap-2 p-2">
              {skills.map((skill, index) => (
                <img
                  className="h-6 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-auto object-cover p-1 rounded-sm md:p-1.5 md:rounded-md lg:p-2 lg:rounded-lg xl:rounded-xl xl:p-2 bg-white bg-opacity-30 mb-3 transition-all duration-300 hover:scale-110"
                  key={index}
                  src={skill || "/placeholder.svg"}
                  alt="Skill"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-lg xl:text-2xl 2xl:text-3xl font-bold py-3 mx-4 text-[#37BCF8] border-b border-[#37BCF8]/30 w-11/12 text-center">
          {name}
        </div>
        <div className="w-11/12 h-1/2 overflow-y-auto leading-relaxed text-xs xl:text-base 2xl:text-xl mx-auto py-4 px-4 text-gray-200">
          {description}
        </div>
        <div className="w-1/2 xl:w-1/2 lg:w-3/4 sm:w-1/2 max-[500px]:w-10/12 py-4 mt-auto mb-4">
          <a href={link} target="_blank" rel="noreferrer">
            <ButtonWithImage
              icon={
                <SquareArrowOutUpRight className="h-5 md:h-6 lg:h-5 xl:h-6 2xl:h-8 w-auto" />
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
