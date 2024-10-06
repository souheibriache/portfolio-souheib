import { Fade } from "react-awesome-reveal";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import NavBar from "./components/sections/NavBar";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/Custom/ScrollToTop";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import { useEffect, useState } from "react";
import { LanguageContext, LanguageType } from "./context/languageContext";
import { LANGUAGE_KEY } from "./utils/constants";

function App() {
  const [language, setLanguage] = useState<LanguageType>("FR");

  useEffect(() => {
    const currentLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (currentLanguage) setLanguage(currentLanguage as LanguageType);
  }, []);
  const toggleLanguage = (language: LanguageType) => {
    setLanguage(language);
    localStorage.setItem(LANGUAGE_KEY, language);
    // location.reload();
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className=" w-full h-screen font-mono">
        <ToastContainer />
        <div className="relative w-full border-0 h-full flex flex-col items-center justify-start ">
          <NavBar />
          <div className="w-full bg-[#10172A] pt-10">
            <Fade>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />

              <Contact />
            </Fade>
          </div>
          <ScrollToTop />
          <Footer />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
export default App;
