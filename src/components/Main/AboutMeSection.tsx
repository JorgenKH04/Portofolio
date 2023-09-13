import { useLanguageContext } from "../../contexts/languageContext";

export function AboutMeSection() {
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  return (
    <div>
      <h2>{lang.aboutme}</h2>
      <div>
        <div>
          <p>{lang.communicator}</p>
          <p>{lang.flexible}</p>
          <p>{lang.criticalthinker}</p>
          <p>{lang.problemsolver}</p>
          <p>{lang.organized}</p>
          <p>{lang.adaptable}</p>
        </div>
        <div>
          <p>{lang.introparagraph2}</p>
          <p>{lang.introparagraph3}</p>
        </div>
      </div>
    </div>
  );
}
