import { useLanguageContext } from "../../contexts/languagecontext";
import { SettingsMenu } from "./SettingsMenu";
import * as MyLogo from "../../assets/logo/Logo1-dark64x64.png";

export function NavBar({ layout }: { layout: string }) {
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  return (
    <>
      {layout === "mobile" ? (
        <nav>
          <div>
            <img src={MyLogo.default} alt="My logo" />
            <h1>JORGEN</h1>
          </div>
          <SettingsMenu />
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
          <SettingsMenu />
        </nav>
      )}
    </>
  );
}
