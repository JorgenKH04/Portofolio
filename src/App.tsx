import { LayoutBase } from "./layout/LayoutBase";
import { HeroSection } from "./components/Header/HeroSection";
import { AboutMeSection } from "./components/Main/AboutMeSection";
import { MySkills } from "./components/Main/MySkills";
import { LanguageProvider } from "./contexts/languageContext";
import { LayoutProvider } from "./contexts/layoutContext";
import { ThemeProvider } from "./contexts/themeContext";
import "./css/styles.css";

function App() {
  return (
    <LanguageProvider>
      <LayoutProvider>
        <ThemeProvider>
          <LayoutBase>
            <HeroSection />
            <AboutMeSection />
            <MySkills />
          </LayoutBase>
        </ThemeProvider>
      </LayoutProvider>
    </LanguageProvider>
  );
}

export default App;
