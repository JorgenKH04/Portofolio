import { useLanguageContext } from "../../../contexts/languageContext";
import styles from "../../../css/Homepage/AboutMeSection.module.css";

export function AboutMeSection() {
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  return (
    <div className={styles.aboutme}>
      <h2>{lang.aboutme}</h2>
      <div className={styles.aboutme_content}>
        <div
          className={`aboutme_attributes ${styles.aboutme_content_attributes}`}
        >
          <p>{lang.communicator}</p>
          <p>{lang.flexible}</p>
          <p>{lang.criticalthinker}</p>
          <p>{lang.problemsolver}</p>
          <p>{lang.organized}</p>
          <p>{lang.adaptable}</p>
        </div>
        <div className={styles.aboutme_content_paragraphs}>
          <p>{lang.introparagraph2}</p>
          <p>{lang.introparagraph3}</p>
        </div>
      </div>
    </div>
  );
}
