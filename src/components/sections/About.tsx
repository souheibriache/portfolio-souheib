"use client";

import { description, greetings, headline } from "../../data/about";
import { FileText, User } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import ButtonWithImage from "../Custom/ButtonWithImage";
import picture from "../../assets/picture.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { resume, resumeUrl } from "../../data/componentsText";

type Props = {};

const About = ({}: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="text-white min-h-screen flex flex-col w-full pt-20 xl:pt-0"
      id="about"
    >
      <div className="h-full flex items-center md:w-10/12 w-11/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center m-auto w-full gap-8">
          <div className="md:w-7/12 w-full flex flex-col gap-0 xl:gap-4">
            <div className="pb-4 text-3xl font-bold lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-r from-[#37BCF8] to-violet-600 bg-clip-text text-transparent">
              {greetings[language]}
            </div>

            <div className="pb-4 text-xl flex gap-2">
              <span className="text-[#37BCF8] font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">
                <TypewriterComponent
                  options={{
                    strings: description,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div className="leading-loose lg:text-lg lg:leading-8 xl:text-xl xl:leading-9 2xl:text-2xl 2xl:leading-relaxed text-gray-200">
              {headline[language]}
            </div>

            <div className="flex flex-col gap-4 w-full sm:flex-row items-center xl:w-1/2 lg:w-4/6 sm:w-11/12 max-[495px]:w-11/12 justify-center sm:justify-between pt-8">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <ButtonWithImage
                  icon={
                    <FileText className="h-5 md:h-5 lg:h-5 xl:h-6 2xl:h-7 w-auto" />
                  }
                  label={resume[language]}
                />
              </a>
              <a href="#contact" className="w-full">
                <ButtonWithImage
                  icon={
                    <User className="h-5 md:h-5 lg:h-5 xl:h-6 2xl:h-7 w-auto" />
                  }
                  label="Contact"
                />
              </a>
            </div>
          </div>

          <div className="md:w-1/3 w-2/3 flex justify-center">
            <div className="relative rounded-full overflow-hidden border-4 border-[#37BCF8] shadow-lg shadow-[#37BCF8]/30 p-1 hover:shadow-xl hover:shadow-[#37BCF8]/40 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#37BCF8]/20 to-violet-600/20 mix-blend-overlay"></div>
              <img
                className="object-contain w-full rounded-full"
                src={picture || "/placeholder.svg"}
                alt="Profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
