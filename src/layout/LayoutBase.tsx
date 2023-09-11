import { LanguageType } from "../data/language";
import { NavBar } from "../components/Header/NavBar";
import { HeroSection } from "../components/Header/HeroSection";

export function LayoutBase({
  children,
  layout,
  setLanguage,
  lang,
}: {
  children: React.ReactNode;
  layout: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  lang: LanguageType;
}) {
  return (
    <>
      <header>
        <NavBar layout={layout} setLanguage={setLanguage} lang={lang} />
        <HeroSection layout={layout} lang={lang} />
      </header>
      <main>{children}</main>
      <footer>
        <h2>temp</h2>
      </footer>
    </>
  );
}
