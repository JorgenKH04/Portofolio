import { HeroSection } from "../Homepage/Header/HeroSection";
import { AboutMeSection } from "../Homepage/Main/AboutMeSection";
import { MySkills } from "../Homepage/Main/MySkills";
import { CtaCollaboration } from "../Homepage/Main/CtaCollaboration";
import { PartialProjectList } from "../Homepage/Main/PartialProjectList";

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
