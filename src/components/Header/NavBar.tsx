import { LanguageType } from "../../data/language";
import { SettingsMenu } from "./SettingsMenu";
import * as MyLogo from "../../assets/logo/Logo1-dark64x64.png";

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
          <div>
            <img src={MyLogo.default} alt="My logo" />
            <h1>JORGEN</h1>
          </div>
          <SettingsMenu setLanguage={setLanguage} />
        </nav>
      ) : (
        <nav>
          <div>
            <img src={MyLogo.default} alt="My logo" />
            <h1>JORGEN</h1>
          </div>
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
