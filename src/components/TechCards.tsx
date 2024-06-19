import { useAppState } from "../store/app-state";
import {
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  NextjsIcon,
  NestJSIcon,
  NodejsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSSIcon,
  ExpressIcon,
} from "./Icons";

interface TechCardProps {
  tech: string;
  children: React.ReactNode;
}

function TechCard({ children, tech }: TechCardProps) {
  const { theme } = useAppState();
  return (
    <div
      className={`flex select-none gap-2 px-4 bg-gradient-to-br from-[#090909] to-[#151515] h-fit py-2 text-lg rounded-full font-medium border  ${
        theme
          ? "border-[#181818]"
          : "text-[#f0f0f0] shadow-md shadow-[#00000029] border-[#fff0]"
      }  items-center w-fit transition-all duration-300`}
    >
      {children}
      <p className="text-sm max-[500px]:text-xs">{tech}</p>
    </div>
  );
}

export const techCards = [
  {
    tag: "React",
    card: <ReactCard />,
  },
  {
    tag: "Next.js",
    card: <NextCard />,
  },
  {
    tag: "Tailwind CSS",
    card: <TailwindCard />,
  },
  {
    tag: "TypeScript",
    card: <TypeScriptCard />,
  },
  {
    tag: "NestJS",
    card: <NestCard />,
  },
  {
    tag: "CSS",
    card: <CSSCard />,
  },
  {
    tag: "Node.js",
    card: <NodeCard />,
  },
  {
    tag: "Express",
    card: <ExpressCard />,
  },
  {
    tag: "PostgreSQL",
    card: <PostgreSQLCard />,
  },
  {
    tag: "Prisma",
    card: <PrismaCard />,
  },
  {
    tag: "JavaScript",
    card: <JavaScriptCard />,
  },
  {
    tag: "HTML",
    card: <HTMLCard />,
  },
];

export const techCards2 = [
  {
    tag: "React",
    card: <ReactCard />,
  },
  {
    tag: "Next.js",
    card: <NextjsCard2 />,
  },
  {
    tag: "Tailwind CSS",
    card: <TailwindCard2 />,
  },
  {
    tag: "TypeScript",
    card: <TypeScriptCard />,
  },
  {
    tag: "NestJS",
    card: <NestCard />,
  },
  {
    tag: "Node.js",
    card: <NodejsCard2 />,
  },
  {
    tag: "PostgreSQL",
    card: <PostgreSQLCard />,
  },
  {
    tag: "Prisma",
    card: <PrismaCard />,
  },
  {
    tag: "JavaScript",
    card: <JavaScriptCard />,
  },
  {
    tag: "HTML",
    card: <HTMLCard />,
  },
  {
    tag: "CSS",
    card: <CSSCard />,
  },
];

function ReactCard() {
  return (
    <TechCard tech="React">
      <ReactIcon />
    </TechCard>
  );
}
function ExpressCard() {
  return (
    <TechCard tech="Express">
      <ExpressIcon />
    </TechCard>
  );
}

function NextCard() {
  return (
    <TechCard tech="Next.js">
      <NextjsIcon />
    </TechCard>
  );
}
function TailwindCard() {
  return (
    <TechCard tech="Tailwind CSS">
      <TailwindCSSIcon />
    </TechCard>
  );
}
function TypeScriptCard() {
  return (
    <TechCard tech="TypeScript">
      <TypeScriptIcon />
    </TechCard>
  );
}
function NestCard() {
  return (
    <TechCard tech="NestJS">
      <NestJSIcon />
    </TechCard>
  );
}
function NodeCard() {
  return (
    <TechCard tech="Node.js">
      <NodejsIcon />
    </TechCard>
  );
}
function PostgreSQLCard() {
  return (
    <TechCard tech="PostgreSQL">
      <PostgreSQLIcon />
    </TechCard>
  );
}
function PrismaCard() {
  return (
    <TechCard tech="Prisma">
      <PrismaIcon />
    </TechCard>
  );
}
function JavaScriptCard() {
  return (
    <TechCard tech="JavaScript">
      <JavaScriptIcon />
    </TechCard>
  );
}
function HTMLCard() {
  return (
    <TechCard tech="HTML">
      <HTML5Icon />
    </TechCard>
  );
}
function CSSCard() {
  return (
    <TechCard tech="CSS">
      <CSSIcon />
    </TechCard>
  );
}

function TailwindCard2() {
  return (
    <TechCard tech="Tailwind CSS">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="#38bdf8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
        ></path>
      </svg>
    </TechCard>
  );
}

function NextjsCard2() {
  return (
    <TechCard tech="Next.js">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="currentColor"
          d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096z"
        ></path>
      </svg>
    </TechCard>
  );
}

function NodejsCard2() {
  return (
    <TechCard tech="Node.js">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#83CD29"
          d="M12 23.956c-.342 0-.66-.089-.957-.243l-3.029-1.738c-.455-.242-.227-.33-.09-.374c.614-.198.728-.242 1.366-.595c.068-.044.16-.022.228.022l2.323 1.343c.09.044.205.044.273 0l9.087-5.084c.09-.044.136-.132.136-.242V6.899c0-.11-.045-.198-.136-.242l-9.087-5.061c-.091-.044-.205-.044-.273 0L2.754 6.657c-.091.044-.137.154-.137.242v10.146c0 .088.046.198.137.242l2.482 1.387c1.344.66 2.186-.11 2.186-.88V7.78c0-.132.114-.264.274-.264h1.161c.137 0 .273.11.273.264v10.013c0 1.739-.979 2.751-2.687 2.751c-.524 0-.934 0-2.095-.55l-2.391-1.32A1.847 1.847 0 0 1 1 17.067V6.921c0-.66.364-1.276.957-1.606L11.044.23a2.095 2.095 0 0 1 1.912 0l9.088 5.084c.592.33.956.946.956 1.606v10.146c0 .66-.364 1.276-.956 1.607l-9.087 5.083a2.4 2.4 0 0 1-.957.198m2.801-6.977c-3.985 0-4.805-1.76-4.805-3.257c0-.132.114-.264.273-.264h1.184c.137 0 .25.088.25.22c.183 1.166.707 1.738 3.121 1.738c1.913 0 2.733-.418 2.733-1.408c0-.572-.228-.99-3.211-1.276c-2.483-.243-4.031-.77-4.031-2.685c0-1.783 1.548-2.84 4.145-2.84c2.915 0 4.35.969 4.532 3.082a.347.347 0 0 1-.069.198c-.045.044-.113.088-.182.088h-1.184a.265.265 0 0 1-.25-.198c-.274-1.21-.98-1.607-2.847-1.607c-2.096 0-2.346.704-2.346 1.233c0 .638.296.836 3.12 1.188c2.801.352 4.122.858 4.122 2.75c-.023 1.938-1.662 3.038-4.555 3.038"
        ></path>
      </svg>
    </TechCard>
  );
}
