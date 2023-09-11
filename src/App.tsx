import { useState } from "react";
import { LayoutBase } from "./layout/LayoutBase";
import { Language } from "./data/language";
import { HeroSection } from "./components/Header/HeroSection";
import { AboutMeSection } from "./components/Main/AboutMeSection";
import { MySkills } from "./components/Main/MySkills";

function App() {
  const [language, setLanguage] = useState("nb-NO");
  const lang = new Language(language).lang;
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const layout = width <= 700 ? "mobile" : "pc";

  return (
    <LayoutBase layout={layout} setLanguage={setLanguage} lang={lang}>
      <HeroSection layout={layout} lang={lang} />
      <AboutMeSection lang={lang} />
      <MySkills />
    </LayoutBase>
  );
}

export default App;
