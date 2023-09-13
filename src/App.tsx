import { LayoutBase } from "./layout/LayoutBase";
import { HeroSection } from "./components/Header/HeroSection";
import { AboutMeSection } from "./components/Main/AboutMeSection";
import { MySkills } from "./components/Main/MySkills";
import { LanguageProvider } from "./contexts/languagecontext";

function App() {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const layout = width <= 700 ? "mobile" : "pc";

  return (
    <LanguageProvider>
      <LayoutBase layout={layout}>
        <HeroSection layout={layout} />
        <AboutMeSection />
        <MySkills />
      </LayoutBase>
    </LanguageProvider>
  );
}

export default App;
