import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "../../css/settingsmenu.module.css";
import { useLanguageContext } from "../../contexts/languageContext";
import { useThemeContext } from "../../contexts/themeContext";
import { useLayoutContext } from "../../contexts/layoutContext";

export function SettingsMenu({ settingState }: { settingState: boolean }) {
  const [langMenu, setLangMenu] = useState(false);
  const languageContext = useLanguageContext();
  const themeContext = useThemeContext();
  const layoutContext = useLayoutContext();
  if (!settingState) return null;
  if (!languageContext || !themeContext) return null;
  const setLanguage = languageContext[1];
  const lang = languageContext[0];
  const setTheme = themeContext[1];
  const theme = themeContext[0];
  const mobile = layoutContext;
  return (
    <div className={`menu ${styles.menu}`}>
      {mobile ? (
        <div className={styles.menu_links}>
          <Link to={"aboutme"}>{lang.aboutme}</Link>
          <Link to={"contact"}>{lang.contact}</Link>
          <Link to={"projects"}>{lang.projects}</Link>
        </div>
      ) : null}
      <button
        className={styles.menu_themebtn}
        type="button"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <div className={styles.menu_iconcontainer}>
          <div
            className={`menu_iconcontainer_moonicon ${styles.menu_iconcontainer_moonicon}`}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1.42 -1.12 23.85 25.23"
            >
              <title>Moon Icon from icons8</title>
              <path
                d="M9.91643 6.40976C9.91643 4.62157 10.3883 2.86452 11.2866 1.31946H11.1896C9.40192 1.31788 7.64533 1.78706 6.09653 2.6798C4.54772 3.57255 3.26129 4.85739 2.36663 6.4051C1.47197 7.9528 1.00063 9.70881 1 11.4965C0.999376 13.2842 1.46949 15.0405 2.36307 16.5888C3.25665 18.1372 4.54218 19.4229 6.09036 20.3167C7.63855 21.2106 9.3948 21.681 11.1825 21.6806C12.9702 21.6803 14.7262 21.2092 16.2741 20.3148C17.8219 19.4204 19.107 18.1342 20 16.5856C17.3176 16.56 14.7537 15.4768 12.8656 13.5713C10.9774 11.6659 9.91757 9.09226 9.91643 6.40976Z"
                stroke="#000514"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`menu_iconcontainer_sunicon ${styles.menu_iconcontainer_sunicon}`}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1.28 -1.28 25.55 25.55"
            >
              <title>Sun icons from icons8</title>
              <path
                d="M11.5 3.45002V1.15002M11.5 21.85V19.55M5.80749 5.80752L4.18139 4.18142M18.8186 18.8186L17.1925 17.1925M3.44999 11.5H1.14999M21.85 11.5H19.55M5.80749 17.1925L4.18139 18.8186M18.8186 4.18142L17.1925 5.80752M16.1 11.5C16.1 12.72 15.6154 13.89 14.7527 14.7527C13.89 15.6154 12.72 16.1 11.5 16.1C10.28 16.1 9.10997 15.6154 8.2473 14.7527C7.38464 13.89 6.89999 12.72 6.89999 11.5C6.89999 10.28 7.38464 9.11 8.2473 8.24733C9.10997 7.38467 10.28 6.90002 11.5 6.90002C12.72 6.90002 13.89 7.38467 14.7527 8.24733C15.6154 9.11 16.1 10.28 16.1 11.5Z"
                stroke="#B2D9F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>
      <div className={`menu_dropdown ${styles.menu_dropdown}`}>
        <button
          type="button"
          onClick={() => setLangMenu((oldState) => !oldState)}
        >
          Dropdown opener
        </button>
        {langMenu ? (
          <>
            <button
              type="button"
              onClick={() => {
                setLanguage("nb-NO");
                setLangMenu(false);
              }}
            >
              NB
            </button>
            <button
              type="button"
              onClick={() => {
                setLanguage("en-US");
                setLangMenu(false);
              }}
            >
              EN
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
