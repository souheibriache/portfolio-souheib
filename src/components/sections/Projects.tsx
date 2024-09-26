import { projects } from "../../data/projects";
import Card from "../Custom/Card";
import SectionTitle from "../Custom/SectionTitle";

type Props = {};

const Projects = ({}: Props) => {
  return (
    <div className="w-full mx-auto text-white py-10" id="projects">
      <SectionTitle title={"Projects"} />
      <div className="lg:w-11/12 w-full mx-auto flex flex-wrap items-center justify-center gap-8 py-6">
        {projects.map((element) => {
          return (
            <div
              key={element.name}
              className="w-11/12 lg:w-5/12 md:w-2/3 sm:w-3/4 flex flex-wrap items-center"
            >
              <Card
                name={element.name}
                img={element.img}
                description={element.description}
                link={element.link}
                skills={element.skills}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
