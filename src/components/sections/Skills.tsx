"use client";

import { useContext, useState } from "react";
import { skills, skillsCategories } from "../../data/skills";
import SkillsNav from "../Custom/SkillsNav";
import SectionTitle from "../Custom/SectionTitle";
import { LanguageContext } from "../../context/languageContext";
import { sections } from "../../data/componentsText";
import SkillCard from "../Custom/SkillCard";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Skills = ({}: Props) => {
  const { language } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(
    skillsCategories[0].category
  );
  const [categories] =
    useState<{ category: string; name: { FR: string; EN: string } }[]>(
      skillsCategories
    );
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
    <div
      id="skills"
      className="md:w-10/12 w-11/12 mx-auto flex min-[850px]:flex-row min-[850px]:flex-wrap flex-col min-[850px]:justify-center text-white pt-16 pb-20"
    >
      <div className="w-full h-full min-h-full">
        <SectionTitle title={sections[1].name[language]} />

        <SkillsNav
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        <div className="flex bg-[#1a1f35] rounded-b-md min-h-full flex-wrap w-full justify-center pt-8 pb-10 px-4 shadow-lg">
          <Fade cascade damping={0.05} triggerOnce>
            {currentSkills?.map((element, id) => (
              <SkillCard
                key={id}
                name={element.name}
                icon={element.icon}
                category={element.category}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
