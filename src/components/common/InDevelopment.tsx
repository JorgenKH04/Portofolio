// import { useParams } from "react-router-dom";

// import { Projects } from "@data/projects";
import { useLanguageContext } from "@contexts/languageContext";
import styles from "@css/common/indevelopment.module.css";

export function InDevelopment() {
  const languageContext = useLanguageContext();
  const lang = languageContext[0];
  // const { project } = useParams();
  return (
    <div className={styles.unfinished}>
      <h1>{lang.underdevelopmentheader}</h1>
      <p>{lang.underdevelopmentparagraph}</p>
      {/* {Projects.map((proj) => {
        if (proj.name === project) {
          return (
            <>
              <h1>{lang.underdevelopmentheader}</h1>
              <p>{lang.underdevelopmentparagraph}</p>
            </>
          );
        }
        return null;
      })} */}
    </div>
  );
}
