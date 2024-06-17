import { GitHubIcon, LinkedinIcon, MailIcon } from "./Icons";

interface Props {
  className?: string;
}

function SocialsContainer({ className }: Props) {
  return (
    <div
      className={`flex gap-5 ${className}`}
    >
      <a
        className="p-[2px] hover:opacity-50 transition-opacity cursor-pointer"
        href="mailto:brunominighin@gmail.com"
        target="_blank"
      >
        <MailIcon w="30px" h="30px" />
      </a>
      <a
        className="p-[2px] hover:opacity-50 transition-opacity cursor-pointer"
        href="https://github.com/BrunoM889"
        target="_blank"
      >
        <GitHubIcon w="35px" h="35px" />
      </a>
      <a
        className="p-[2px] hover:opacity-50 transition-opacity cursor-pointer"
        href="https://www.linkedin.com/in/bruno-minighin-2161592a7"
        target="_blank"
      >
        <LinkedinIcon w="30px" h="30px" />
      </a>
    </div>
  );
}

export default SocialsContainer;
