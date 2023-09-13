import { SetStateAction, createContext, useContext, useState } from "react";
import { Language, LanguageType } from "../data/language";

type ContextType =
  | [LanguageType, React.Dispatch<SetStateAction<string>>]
  | null;

const languageContext = createContext<ContextType | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("nb-NO");
  const initialLang = new Language(language).lang;

  const lang: ContextType = [initialLang, setLanguage];

  return (
    <languageContext.Provider value={lang}>{children}</languageContext.Provider>
  );
}

function useLanguageContext() {
  return useContext(languageContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { LanguageProvider, useLanguageContext };
