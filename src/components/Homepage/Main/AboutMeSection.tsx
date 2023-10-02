import { useLanguageContext } from "@contexts/languageContext";
import styles from "@css/Homepage/AboutMeSection.module.css";

export function AboutMeSection() {
  const languageContext = useLanguageContext();
  const lang = languageContext[0];
  return (
    <div id="aboutme" className={`aboutme ${styles.aboutme}`}>
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
          <a href={lang.cv} download={true}>
            CV
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-down from pictogrammers.org</title>
              <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
