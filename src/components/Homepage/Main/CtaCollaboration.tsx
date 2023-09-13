import { useLanguageContext } from "../../../contexts/languageContext";

export function CtaCollaboration() {
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  return (
    <div>
      <h3>{lang.collaborationheader}</h3>
      <p>
        {lang.collaborationpart1}
        <span>{lang.collaborationemail}</span>
        {lang.collaborationpart2}
      </p>
      <button type="button">{lang.ctacontact}</button>
    </div>
  );
}
