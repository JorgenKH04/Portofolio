import { Link } from "react-router-dom";

import { Projects } from "../../../data/projects";
import { useLayoutContext } from "../../../contexts/layoutContext";
import { useLanguageContext } from "../../../contexts/languageContext";
import styles from "../../../css/Homepage/Projects.module.css";

export function PartialProjectList() {
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  const mobile = layoutContext;
  const renderedProjects = mobile ? 3 : 6;

  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      {Projects.map((project, i) => {
        const { name, img, shortdescription } = project;
        if (i >= renderedProjects) return;
        return (
          <div
            style={{ backgroundImage: `url(${img})` }}
            className={`${
              mobile ? styles.projects_mobile : styles.projects_pc
            } ${styles.projects_project}`}
            key={name}
          >
            <div className={styles.projects_project_info}>
              <h3>{name}</h3>
              <p>{shortdescription}</p>
              <button type="button">Info</button>
            </div>
          </div>
        );
      })}
      <Link className="router_link_button" to={"projects"}>
        {lang.moreprojects}
      </Link>
    </div>
  );
}
