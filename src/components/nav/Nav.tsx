import { useAppState } from "../../store/app-state";
import { navTextContent } from "../../utils/text-content.ts";
import { useState, useEffect } from "react";
import StateButtons from "./StateButtons.tsx";
import { MoonIcon, SunIcon } from "../Icons";

interface Props {
  changePage: (page: number) => void;
  page: number;
}

function Nav({ changePage, page }: Props) {
  const { theme, lang, changeLang, changeTheme } = useAppState();
  const textContent = navTextContent(lang);
  const [itemHover, setItemHover] = useState<null | number>(null);

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = `flex gap-4 text-[18px] px-5 border ${
    theme
      ? ` ${
          scroll < 50
            ? "bg-[#ffffff00] border-[#20202000] min-[471px]:translate-x-[-20px]  max-[470px]:px-0"
            : "bg-[#00000051] border-[#303030]"
        }`
      : `${
          scroll < 50
            ? "bg-[#ffffff00] border-[#20202000] min-[471px]:translate-x-[-20px]  max-[470px]:px-0"
            : "bg-[#ffffff90] border-[#bbbbbb]"
        }`
  } h-[48px] items-center rounded-full backdrop-blur-sm nav max-[470px]:text-[16px] max-[470px]:w-full min-w-[301px] max-[488px]:gap-2`;

  return (
    <header className="w-[90vw] max-w-[740px] flex fixed h-[80px] pt-6 z-20">
      <nav className="w-full flex grow max-[470px]:justify-center">
        <div className={`${navStyle} flex items-center`}>
          <ul className="grow flex gap-4 max-[488px]:gap-2">
            {textContent.map((text, index) => {
              return (
                <li
                  key={index}
                  className={`cursor-pointer font-medium ${
                    index === 3 && "grow"
                  }`}
                  onClick={() => changePage(index)}
                  onMouseEnter={() => setItemHover(index)}
                  onMouseLeave={() => setItemHover(null)}
                >
                  <span
                    className={`${text === "sobre mí" && "max-[500px]:hidden"}`}
                  >
                    {text}
                  </span>
                  <span
                    className={`${
                      text === "sobre mí" ? "min-[501px]:hidden" : "hidden"
                    }`}
                  >
                    info
                  </span>
                  <div
                    className={`
                    ${page === index ? "w-[105%]" : "w-[0%]"}
                    ${
                      itemHover === index ? "w-[105%]" : "w-[0%]"
                    } relative top-[-12px] left-[-2.5%] h-[1px] ${
                      theme ? "bg-[#dcdcdc]" : "bg-[#090909]"
                    } transition-all duration-300`}
                  />
                </li>
              );
            })}
          </ul>
          <div
            className={`p-1 h-[30px] w-[25px] overflow-hidden flex-col relative cursor-default min-[471px]:hidden`}
          >
            <MoonIcon
              click={() => {
                changeTheme(!theme);
              }}
              className={`${
                theme ? "top-[4px]" : "top-[-150px]"
              } cursor-pointer transition-all duration-300 absolute h-[20px] w-[20px]`}
            />

            <SunIcon
              click={() => {
                changeTheme(!theme);
              }}
              className={`cursor-pointer ${
                theme ? "top-[-150px]" : "top-[4px]"
              } transition-all duration-300 absolute h-[20px] w-[20px]`}
            />
          </div>
          <div
            className={`p-1 h-[30px] w-[25px] flex justify-center items-center  overflow-hidden flex-col relative cursor-default min-[471px]:hidden`}
          >
            <span
              onClick={() => {
                changeLang(!lang);
              }}
              className={`${
                lang ? "opacity-100" : "opacity-0"
              } cursor-pointer top-[2.5px] transition-opacity absolute duration-300 h-[20px] w-[20px]`}
            >
              es
            </span>

            <span
              onClick={() => {
                changeLang(!lang);
              }}
              className={`cursor-pointer top-[2.5px] ${
                lang ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300 absolute h-[20px] w-[20px]`}
            >
              en
            </span>
          </div>
        </div>
      </nav>
      <StateButtons scroll={scroll} />
    </header>
  );
}

export default Nav;
