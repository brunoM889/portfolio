import Nav from "./components/nav/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { useAppState } from "./store/app-state";
import { useEffect, useState } from "react";
import { footerTextContent } from "./utils/text-content";

/*

  dark #090909
  darkHover #212121
  light #dcdcdc
  lightHover #bababa

*/

function App() {
  const [page, setPage] = useState(0);
  const { theme, lang } = useAppState();

  document.body.style.backgroundColor = theme ? "#090909" : "#dcdcdc";
  document.body.style.color = theme ? "#dcdcdc" : "#090909";
  //document.body.classList.add("transition-all");
  //document.body.classList.add("duration-300");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const textContent = footerTextContent(lang);
  return (
    <div
      className={`w-[90vw] min-h-[100dvh] max-w-[740px] flex flex-col ${
        theme
          ? "selection:bg-[#f0f0f0] selection:text-[#090909]"
          : "selection:bg-[#090909] selection:text-[#f0f0f0]"
      }`}
    >
      <Nav changePage={setPage} page={page} />
      {page === 0 && <About setPage={setPage} />}
      {page === 1 && <Projects />}
      {page === 2 && <Contact />}
      <footer className="w-full flex py-2 text-sm">
        <p className="grow max-[500px]:text-center">{textContent}</p>
        <a
          href="https://github.com/brunoM889"
          target="_blank"
          className={`max-[500px]:hidden select-none transition-opacity cursor-pointer hover:opacity-50`}
        >
          @brunoM889
          <div
            className={`w-full relative top-[-9px] h-[1px] ${
              theme ? "bg-[#f0f0f0]" : "bg-[#090909]"
            }`}
          ></div>
        </a>
      </footer>
    </div>
  );
}

export default App;
