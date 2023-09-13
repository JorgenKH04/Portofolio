import { useLanguageContext } from "../../contexts/languagecontext";

export function SettingsMenu() {
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const setLanguage = languageContext[1];
  return (
    <>
      <button type="button">Dark/Light Mode</button>
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
    </>
  );
}
