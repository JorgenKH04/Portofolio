import { SettingsMenu } from "./SettingsMenu";

export function NavBar({
  layout,
  language,
  setLanguage,
}: {
  layout: string;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      {layout === "mobile" ? (
        <nav>
          <img alt="" />
          <svg />
          <SettingsMenu setLanguage={setLanguage} />
        </nav>
      ) : (
        <nav>
          <img alt="" />
          <a href="vg.no">{language === "nb-NO" ? "Om meg" : "About"}</a>
          <a href="vg.no">{language === "nb-NO" ? "Kontakt meg" : "Contact"}</a>
          <a href="vg.no">{language === "nb-NO" ? "Prosjekter" : "Projects"}</a>
          <svg />
          <SettingsMenu setLanguage={setLanguage} />
        </nav>
      )}
    </>
  );
}
