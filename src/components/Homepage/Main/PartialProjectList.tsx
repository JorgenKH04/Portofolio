import { Link } from "react-router-dom";

import { Projects } from "@data/projects";
import { useLayoutContext } from "@contexts/layoutContext";
import { useLanguageContext } from "@contexts/languageContext";
import styles from "@css/Homepage/Projects.module.css";

export function PartialProjectList() {
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  const lang = languageContext[0];
  const mobile = layoutContext;
  const renderedProjects = mobile ? 3 : 6;

  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={mobile ? styles.projects_mobile : styles.projects_pc}>
        {Projects.map((project, i) => {
          const { name, img, shortdescription } = project;
          if (i >= renderedProjects) {
            return;
          }
          return (
            <div
              style={{ backgroundImage: `url(${img})` }}
              className={`${styles.projects_project}`}
              key={name}
            >
              <div
                className={`${styles.projects_project_info} projects_project_info`}
              >
                <h3>{name}</h3>
                <p>{shortdescription}</p>
                <Link to={`projects/${name}`}>Info</Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        className={`router_link_button ${styles.projects_morebtn}`}
        to={"projects"}
      >
        {lang.moreprojects}
      </Link>
    </div>
  );
}
