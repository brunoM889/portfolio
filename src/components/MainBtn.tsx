import { useState } from "react";
import { useAppState } from "../store/app-state";

interface Props {
  click?: () => void;
  children?: React.ReactNode;
  text: string;
  className?: string;
}

function MainBtn({ click, children, text, className }: Props) {
  const { theme } = useAppState();
  const [btnHover, setBtnHover] = useState(false);

  return (
    <button
      className={`flex gap-4 items-center w-fit pr-4 py-[2px] mb-2 ${className}`}
      onMouseEnter={() => setBtnHover(true)}
      onClick={click}
      onMouseLeave={() => setBtnHover(false)}
    >
      <span className="text-lg">
        {text}{" "}
        <div
          className={`
            ${btnHover ? "w-[100%]" : "w-[0%]"} relative top-[-12px] h-[1px] ${
            theme ? "bg-[#dcdcdc]" : "bg-[#090909]"
          } transition-all duration-300`}
        />
      </span>{" "}
      {children}
    </button>
  );
}

export default MainBtn;
