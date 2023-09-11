import { LanguageType } from "../../data/language";
import { SettingsMenu } from "./SettingsMenu";

export function NavBar({
  layout,
  setLanguage,
  lang,
}: {
  layout: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  lang: LanguageType;
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
          <a href="vg.no">{lang.aboutme}</a>
          <a href="vg.no">{lang.contact}</a>
          <a href="vg.no">{lang.projects}</a>
          <svg />
          <SettingsMenu setLanguage={setLanguage} />
        </nav>
      )}
    </>
  );
}
