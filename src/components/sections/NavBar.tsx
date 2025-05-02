"use client";

import type React from "react";
import { useContext, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { LanguageContext } from "../../context/languageContext";
import { sections } from "../../data/componentsText";
import LanguageSwitcher from "../Custom/LanguageSwitcher";

type Props = {};

const NavBar = ({}: Props) => {
  const languageContext = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ensure `languageContext` is available
  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language = "FR", toggleLanguage } = languageContext;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickHandler = (element: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveNav(element.currentTarget.id);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`items-start flex flex-row justify-between p-4 z-50 fixed top-0 right-0 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#09132e]/95 backdrop-blur-sm shadow-lg"
            : "bg-[#09132e]"
        }`}
      >
        <div className="md:w-10/12 w-11/12 mx-auto flex flex-shrink-0 flex-wrap justify-between items-center">
          <div>
            <a
              href="#hero"
              onClick={() => {
                setActiveNav("");
                setIsOpen(false);
              }}
              className="transition-transform duration-300 hover:scale-105 block"
            >
              <img
                src={logo || "/placeholder.svg"}
                className="h-8 w-auto xl:h-10 2xl:h-12"
                alt="Logo"
              />
            </a>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex duration-500 transition-opacity text-white items-center px-3 py-2 rounded text-black-500 hover:text-[#37BCF8]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div
            className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 md:max-h-[500px] opacity-0 md:opacity-100 overflow-hidden md:overflow-visible mt-0"
            }`}
          >
            <div className="text-sm text-white lg:text-base xl:text-lg 2xl:text-xl md:flex items-center justify-center md:flex-grow md:gap-5 lg:gap-8 xl:gap-10">
              {sections.map((element) => {
                return (
                  <div key={element.name[language]} className="my-3 md:my-0">
                    <a
                      href={element.linkTo}
                      id={element.name[language]}
                      className={`${
                        activeNav === element.name[language]
                          ? "text-[#37BCF8] font-bold"
                          : "text-white font-semibold"
                      } hover:text-[#37BCF8] block text-center text-nowrap md:inline-block transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-0 transform-gpu`}
                      onClick={onClickHandler}
                    >
                      {element.name[language]}
                    </a>
                  </div>
                );
              })}
              {/* Language switcher */}
              <LanguageSwitcher
                language={language}
                toggleLanguage={toggleLanguage}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
