import { LinkIcon } from "../Icons";
import MainBtn from "../MainBtn";
import { techCards } from "../TechCards";
import { techCards2 } from "../TechCards";
import { InfiniteMovingCards } from "../InfiniteMovingCards";

interface Props {
  title: string;
  description: string[];
  link: string;
  image: string;
  techs: string[];
  video?: string;
}

function ProjectCard({ title, description, link, image, techs, video }: Props) {
  const projectTechsCards = techs.map((tech) => {
    for (const card of techCards) {
      if (card.tag === tech) {
        return card.card;
      }
    }
  });
  const projectTechsCardsForMobile = techs.map((tech) => {
    for (const card of techCards2) {
      if (card.tag === tech) {
        return card;
      }
    }
  });

  return (
    <div className="flex gap-4 w-full flex-col relative chargeCard">
      <div className="min-h-[369px] w-full max-[825px]:min-h-[0px] rounded-md">
        {!video ? (
          <a href={link} target="_blank" className="w-full rounded-md">
            <img
              className="w-full rounded-md"
              src={`/media/${image}`}
              alt="Project image"
            />
          </a>
        ) : (
          <video
            className="w-full rounded-md "
            src={`/media/${video}`}
            muted
            controls
          />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>

        <div className="flex flex-col mb-4 gap-2 max-h-[300px] overflow-y-auto">
          {description.map((desc, index) => {
            return (
              <p key={index} className="text-sm">
                {desc}
              </p>
            );
          })}
        </div>

        <div className="w-full flex gap-4 items-end justify-end max-[600px]:flex-col z-10">
          <ul className="flex gap-2 flex-wrap grow max-[540px]:w-full max-[450px]:hidden">
            {projectTechsCards.map((card, index) => {
              return <li key={index}>{card}</li>;
            })}
          </ul>
          <div className="w-full min-[451px]:hidden">
            {projectTechsCardsForMobile && (
              <InfiniteMovingCards
                items={projectTechsCardsForMobile}
                speed={
                  projectTechsCardsForMobile.length <= 3 ? "slow" : "normal"
                }
              />
            )}
          </div>
          {link && (
            <a
              href={link}
              onClick={() => {
                if (
                  title === "atsnigram" ||
                  title === "expense tracker" ||
                  title === "gestor de gastos"
                ) {
                  alert(
                    "Guest credentials:\n  Username: test@gmail.com\n  Password: 123"
                  );
                }
              }}
              target="_blank"
              className="flex w-fit"
            >
              <MainBtn text={"Link"} className="gap-[8px] pr-[2px] mb-[0px]">
                <LinkIcon w="20px" h="20px" />
              </MainBtn>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
