"use client";

import { experiences } from "../../data/experience";
import SectionTitle from "../Custom/SectionTitle";
import { Fade } from "react-awesome-reveal";
import { sections } from "../../data/componentsText";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import ExperienceCard from "../Custom/ExperienceCard";

type Props = {};

const Experience = ({}: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div
      id="experience"
      className="relative z-50 mx-auto md:w-10/12 w-11/12 py-12"
    >
      <SectionTitle title={sections[2].name[language]} />

      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <Fade triggerOnce cascade damping={0.2} duration={800}>
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                id={experience.id}
                title={experience.title}
                company={experience.company}
                duration={experience.duration}
                description={experience.description}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Experience;
