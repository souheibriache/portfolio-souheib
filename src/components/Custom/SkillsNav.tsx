"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

type Props = {
  categories: any[];
  activeCategory: any;
  onCategoryChange: (category: string) => void;
};

const SkillsNav = ({ categories, activeCategory, onCategoryChange }: Props) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="w-full h-16 lg:h-18 xl:h-20 2xl:h-24 nav flex flex-row justify-between rounded-t-md overflow-hidden bg-[#232942] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl shadow-md">
      {categories.map((category, index) => (
        <div
          onClick={() => onCategoryChange(category.category)}
          key={index}
          className={`py-3 flex justify-center items-center w-full text-center hover:bg-[#37BCF8]/10 duration-300 cursor-pointer transition-all ${
            category.category === activeCategory
              ? "border-b-2 border-[#37BCF8] bg-[#1a1f35] text-[#37BCF8] font-medium"
              : "text-white"
          }`}
        >
          {category.name[language]}
        </div>
      ))}
    </div>
  );
};

export default SkillsNav;
