import { useLanguageContext } from "../../contexts/languageContext";
import { useThemeContext } from "../../contexts/themeContext";

export function SettingsMenu() {
  const languageContext = useLanguageContext();
  const themeContext = useThemeContext();
  if (!languageContext || !themeContext) return null;
  const setLanguage = languageContext[1];
  const setTheme = themeContext[1];
  const theme = themeContext[0];
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme}
      </button>
      <div>
        <button type="button">Dropdown opener</button>
        <button
          type="button"
          onClick={() => {
            setLanguage("nb-NO");
          }}
        >
          NB
        </button>
        <button
          type="button"
          onClick={() => {
            setLanguage("en-US");
          }}
        >
          EN
        </button>
      </div>
    </div>
  );
}
