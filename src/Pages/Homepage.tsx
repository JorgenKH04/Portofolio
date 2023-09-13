import { HeroSection } from "../components/Homepage/Header/HeroSection";
import { AboutMeSection } from "../components/Homepage/Main/AboutMeSection";
import { MySkills } from "../components/Homepage/Main/MySkills";
import { CtaCollaboration } from "../components/Homepage/Main/CtaCollaboration";
import { PartialProjectList } from "../components/Homepage/Main/PartialProjectList";

export function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <MySkills />
      <CtaCollaboration />
      <PartialProjectList />
    </>
  );
}
