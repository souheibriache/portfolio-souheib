import { useState } from "react";
import { skills, skillsCategories } from "../../data/skills";
import SkillsNav from "./SkillsNav";
import SectionTitle from "./SectionTitle";

type Props = {};

const Skills = ({}: Props) => {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0]);
  const [categories] = useState<string[]>(skillsCategories);
  const [currentSkills, setCurrentSkills] = useState<any[]>(
    skills.filter((skill) => skill.category === activeCategory)
  );
  const onCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentSkills(() =>
      skills.filter((skill) => skill.category === category)
    );
  };
  return (
    <div className="w-full h-full min-h-full">
      <SectionTitle title={"Skills"} />
      <SkillsNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
      <div className="flex bg-white bg-opacity-10 rounded-b-md min-h-full flex-wrap w-full justify-center gap- pt-5 items-start">
        {currentSkills?.map((element, id) => {
          return (
            <div
              className="w-24 sm:w-32 lg:w-36 xl:w-44 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer hover:bg-white hover:bg-opacity-10 hover:shadow-md hover:shadow-[#ffffff33]"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#37BCF8]  shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#37BCF8] to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 p-2 sm:gap-2 sm:p-3 lg:gap-3 lg:p-5 xl:gap-4 xl:p-7">
                  <div className="h-8 sm:h-10 lg:h-12 xl:h-16">
                    <img
                      src={element.icon}
                      alt={element.name}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white mt-auto text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-2xl">
                    {element.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
