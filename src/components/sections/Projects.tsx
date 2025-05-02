"use client";

import { Fade } from "react-awesome-reveal";
import { projects } from "../../data/projects";
import Card from "../Custom/Card";
import SectionTitle from "../Custom/SectionTitle";
import { sections } from "../../data/componentsText";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

type Props = {};

const Projects = ({}: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full mx-auto text-white py-16" id="projects">
      <SectionTitle title={sections[3].name[language]} />

      <div className="lg:w-11/12 w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-4">
        {projects.map((element, index) => {
          return (
            <div
              key={element.name}
              className="w-full flex flex-wrap items-center"
            >
              <Fade
                triggerOnce
                direction={index % 2 === 0 ? "left" : "right"}
                duration={700}
              >
                <Card
                  name={element.name}
                  img={element.img}
                  description={element.description[language]}
                  link={element.link}
                  skills={element.skills}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
