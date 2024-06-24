import { useAppState } from "../../store/app-state";
import { MoonIcon, SunIcon } from "../Icons";

function StateButtons({ scroll }: { scroll: number }) {
  const { theme, lang, changeTheme, changeLang } = useAppState();

  const buttonsContainerStyle = `w-fit flex gap-4 text-[18px] px-5 border   ${
    theme
      ? ` ${
          scroll < 50
            ? "bg-[#ffffff00] border-[#20202000] translate-x-[20px]"
            : "bg-[#00000051] border-[#303030]"
        }`
      : `${
          scroll < 50
            ? "bg-[#ffffff00] border-[#20202000] translate-x-[20px]"
            : "bg-[#ffffff90] border-[#bbbbbb]"
        }`
  } h-[48px] items-center rounded-full backdrop-blur-sm nav max-[470px]:hidden`;

  return (
    <div className={buttonsContainerStyle}>
      <button
        className={`p-1 h-[30px] w-[30px] overflow-hidden flex-col relative cursor-default`}
      >
        <MoonIcon
          click={() => {
            changeTheme(!theme);
          }}
          className={`${
            !theme ? "top-[4px]" : "top-[-150px]"
          } cursor-pointer transition-all duration-300 absolute h-[20px] w-[20px]`}
        />

        <SunIcon
          click={() => {
            changeTheme(!theme);
          }}
          className={`cursor-pointer ${
            !theme ? "top-[-150px]" : "top-[4px]"
          } transition-all duration-300 absolute h-[20px] w-[20px]`}
        />
      </button>
      <button
        className={`p-1 h-[30px] w-[30px] flex justify-center items-center  overflow-hidden flex-col relative cursor-default`}
      >
        <span
          onClick={() => {
            changeLang(!lang);
          }}
          className={`${
            lang ? "opacity-100" : "opacity-0"
          } cursor-pointer top-[1px] transition-opacity font-medium absolute duration-300 h-[20px] w-[20px]`}
        >
          es
        </span>

        <span
          onClick={() => {
            changeLang(!lang);
          }}
          className={`cursor-pointer top-[1px] ${
            lang ? "opacity-0" : "opacity-100"
          } transition-opacity font-medium duration-300 absolute h-[20px] w-[20px]`}
        >
          en
        </span>
      </button>
    </div>
  );
}

export default StateButtons;
