import { createContext } from "react";
import { LANGUAGE_KEY } from "../utils/constants";

export type LanguageType = "FR" | "EN";
export type LanguageContextType = {
  language: LanguageType;
  toggleLanguage: (lang: LanguageType) => void;
};
export const LanguageContext = createContext<LanguageContextType>({
  language: (localStorage.getItem(LANGUAGE_KEY) as LanguageType) || "FR",
  toggleLanguage: () => {},
});
