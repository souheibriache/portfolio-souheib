import { Fade } from "react-awesome-reveal";
import { projects } from "../../data/projects";
import Card from "../Custom/Card";
import SectionTitle from "../Custom/SectionTitle";

type Props = {};

const Projects = ({}: Props) => {
  return (
    <div className="w-full mx-auto text-white py-10" id="projects">
      <SectionTitle title={"Projects"} />
      <div className="lg:w-11/12 w-full mx-auto flex flex-wrap items-center justify-center gap-8 py-6">
        {projects.map((element, index) => {
          return (
            <div
              key={element.name}
              className="w-11/12 lg:w-5/12 md:w-2/3 sm:w-3/4 flex flex-wrap items-center"
            >
              <Fade
                triggerOnce
                direction={index % 2 === 0 ? "left" : "right"}
                duration={700}
              >
                <Card
                  name={element.name}
                  img={element.img}
                  description={element.description}
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
