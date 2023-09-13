import { HeroSection } from "../components/Header/HeroSection";
import { AboutMeSection } from "../components/Main/AboutMeSection";
import { MySkills } from "../components/Main/MySkills";

export function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <MySkills />
    </>
  );
}
