import {
  SetStateAction,
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactNode,
} from "react";
import { Language, LanguageType } from "@data/language";

type ContextType = [LanguageType, Dispatch<SetStateAction<string>>];

const languageContext = createContext<ContextType>({} as ContextType);

function LanguageProvider({ children }: { children: ReactNode }) {
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
