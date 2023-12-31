import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "@css/common/navbar.module.css";
import { useLanguageContext } from "@contexts/languageContext";
import { useLayoutContext } from "@contexts/layoutContext";
import { useThemeContext } from "@contexts/themeContext";
import { SettingsMenu } from "./SettingsMenu";
import { Logo } from "./Logo";

export function NavBar() {
  const [settingState, setSettingState] = useState(false);
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  const themeContext = useThemeContext();
  const lang = languageContext[0];
  const theme = themeContext[0];
  const mobile = layoutContext;

  return (
    <>
      {mobile ? (
        <nav className={styles.navbar}>
          <Logo />
          <div>
            <button
              className={styles.svgbutton}
              onClick={() => setSettingState((oldState) => !oldState)}
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 6 18 12">
                <title>menu</title>
                <path
                  fill={theme === "dark" ? "#B2D9F6" : "#000514"}
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                />
              </svg>
            </button>

            <SettingsMenu
              settingState={settingState}
              setSettingState={setSettingState}
            />
          </div>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <Logo />
          <div className={styles.navbar_right}>
            <div className={styles.navbar_rigth_linkdiv}>
              <a href="/#aboutme">{lang.aboutme}</a>
              <a href="/#contact">{lang.contact}</a>
              <Link to={"projects"}>{lang.projects}</Link>
            </div>
            <div>
              <button
                className={styles.svgbutton}
                onClick={() => setSettingState((oldState) => !oldState)}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2.25 2 19.5 20"
                >
                  <title>settings</title>
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </button>
              <SettingsMenu
                settingState={settingState}
                setSettingState={setSettingState}
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
