"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

type Props = {
  id: number;
  title: {
    FR: string;
    EN: string;
  };
  company: string;
  duration: {
    FR: string;
    EN: string;
  };
  description: {
    FR: string;
    EN: string;
  };
  location?: string;
};

const ExperienceCard = ({
  id,
  title,
  company,
  duration,
  description,
  location = "France",
}: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative p-1 mb-8">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#37BCF8] to-violet-600 ml-6 lg:ml-8 xl:ml-10 2xl:ml-12"></div>

      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full bg-[#37BCF8] ml-4.5 lg:ml-6 xl:ml-7.5 2xl:ml-9 z-10 shadow-lg shadow-[#37BCF8]/30"></div>

      <div className="ml-16 lg:ml-20 xl:ml-24 2xl:ml-32 p-4 lg:p-6 xl:p-8 2xl:p-10 bg-[#1f2945] rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:shadow-[#37BCF8]/20 border-l-4 border-[#37BCF8] hover:translate-x-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-base sm:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white bg-gradient-to-r from-[#37BCF8] to-violet-600 bg-clip-text text-transparent">
            {title[language]}
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-[#37BCF8]">
              <BriefcaseIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
              <span className="text-sm sm:text-base xl:text-lg font-medium">
                {company}
              </span>
            </div>

            <div className="flex items-center gap-1 text-gray-300">
              <CalendarIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
              <span className="text-sm sm:text-base xl:text-lg">
                {duration[language]}
              </span>
            </div>

            <div className="flex items-center gap-1 text-gray-300">
              <MapPinIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
              <span className="text-sm sm:text-base xl:text-lg">
                {location}
              </span>
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-sm xl:text-base text-gray-200 leading-relaxed">
            {description[language]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
