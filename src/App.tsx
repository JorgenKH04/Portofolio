import { LayoutBase } from "./layout/LayoutBase";
import { HeroSection } from "./components/Header/HeroSection";
import { AboutMeSection } from "./components/Main/AboutMeSection";
import { MySkills } from "./components/Main/MySkills";
import { LanguageProvider } from "./contexts/languageContext";
import { LayoutProvider } from "./contexts/layoutContext";

function App() {
  return (
    <LanguageProvider>
      <LayoutProvider>
        <LayoutBase>
          <HeroSection />
          <AboutMeSection />
          <MySkills />
        </LayoutBase>
      </LayoutProvider>
    </LanguageProvider>
  );
}

export default App;
