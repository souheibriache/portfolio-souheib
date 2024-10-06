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
    <div className="w-full h-16 lg:h-20 xl:h-24 2xl:h-28 nav flex flex-row justify-between rounded-t-md overflow-hidden bg-white bg-opacity-10 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
      {categories.map((category, index) => (
        <div
          onClick={() => onCategoryChange(category.category)}
          key={index}
          className={`py-3 flex justify-center items-center w-full text-center hover:bg-white hover:bg-opacity-10 duration-200 cursor-pointer ${
            category.category === activeCategory
              ? "border-b-2 border-blue-300"
              : ""
          }`}
        >
          {category.name[language]}
        </div>
      ))}
    </div>
  );
};

export default SkillsNav;
