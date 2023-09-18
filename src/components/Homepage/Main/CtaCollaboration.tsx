import { useLanguageContext } from "../../../contexts/languageContext";
import { Web3Form } from "../../common/Web3Form";

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
      <Web3Form />
    </div>
  );
}
