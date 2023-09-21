import { useState } from "react";

import { useLanguageContext } from "../../../contexts/languageContext";
import { Web3Form } from "../../common/Web3Form";
import styles from "../../../css/Homepage/CTAcollab.module.css";

export function CtaCollaboration() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  return (
    <div className={`cta ${styles.cta}`}>
      <h2>{lang.collaborationheader}</h2>
      <p>
        {lang.collaborationpart1}
        <span>{lang.collaborationemail}</span>
        {lang.collaborationpart2}
      </p>
      <div className={styles.cta_button}>
        <button
          type="button"
          onClick={() => setIsFormOpen((oldState) => !oldState)}
        >
          {lang.ctacontact}
        </button>
      </div>
      <Web3Form
        compClass={`cta_form ${styles.cta_form}`}
        isFormOpen={isFormOpen}
      />
    </div>
  );
}
