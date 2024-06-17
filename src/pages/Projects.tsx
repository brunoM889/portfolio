import { projectsTextContent } from "../utils/text-content";
import { useAppState } from "../store/app-state";
import { projectCardsTextContent } from "../utils/text-content";
import ProjectCard from "../components/projects/ProjectCard";

function Projects() {
  const { lang } = useAppState();
  const textContent = projectsTextContent(lang);
  const projectsCards = projectCardsTextContent(lang);

  return (
    <main>
      <h1 className="mb-4">{textContent.h1}</h1>
      <div className="w-full flex flex-col gap-16">
        {projectsCards.map((card, index) => {
          return (
            <ProjectCard
              video={card.video}
              techs={card.techs}
              image={card.image}
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Projects;
