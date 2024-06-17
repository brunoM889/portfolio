import { aboutTextContent } from "../utils/text-content";
import { useAppState } from "../store/app-state";
import { techCards } from "../components/about/TechCards";
import { InfiniteMovingCards } from "../components/about/InfiniteMovingCards";
import { RightArrowIcon } from "../components/Icons";
import MainBtn from "../components/MainBtn";
import SocialsContainer from "../components/SocialsContainer";

interface Props {
  setPage: (page: number) => void;
}

function About({ setPage }: Props) {
  const { lang } = useAppState();
  const textContent = aboutTextContent(lang);

  return (
    <main>
      <h1>{textContent.h1}</h1>
      {lang ? (
        <div className="flex flex-col">
          <p className="mb-2">
            I’m a <strong>frontend developer</strong> from Argentina. I started
            my journey four years ago and have since gained experience through
            personal projects and freelance work. With a great passion for
            learning new technologies and a critical mindset, I always strive to
            improve and stay up-to-date with the latest trends.
          </p>
          <p className="mb-2">
            <strong>I specialize in React and Next.js,</strong> as I love
            creating fast and highly interactive web applications. While my
            forte is front-end development, I also have solid back-end
            knowledge, allowing me to approach projects from a more general
            perspective.
          </p>
        </div>
      ) : (
        <div className="flex flex-col ">
          <p className="mb-2">
            Soy un <strong>desarrollador front-end</strong> de Argentina.
            Comencé mi camino hace cuatro años y desde entonces he ganado
            experiencia a través de proyectos personales y trabajos freelance.
            Con una gran pasión por aprender nuevas tecnologías y una mentalidad
            crítica, siempre me esfuerzo por mejorar y mantenerme al día con las
            últimas tendencias.
          </p>
          <p className="mb-2">
            <strong>Me especializo en React y Next.js,</strong> ya que me
            encanta crear aplicaciones web rápidas y altamente interactivas. Si
            bien mi fuerte es el desarrollo front-end, también poseo un sólido
            conocimiento de back-end, lo que me permite abordar proyectos desde
            una perspectiva más general.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-xl font-semibold">{textContent.h2}</h2>
        <div className="flex flex-wrap gap-2 max-[780px]:hidden">
          {techCards.map((card, index) => (
            <div key={index}>{card.card}</div>
          ))}
        </div>
        <InfiniteMovingCards className="min-[781px]:hidden" speed="slow" />
      </div>

      <MainBtn
        click={() => {
          setPage(1);
        }}
        text={textContent.callToAct}
      >
        <RightArrowIcon
          className="translate-y-[1px] arrow-animation"
          w="30px"
          h="30px"
        />
      </MainBtn>

      <SocialsContainer />
    </main>
  );
}

export default About;
