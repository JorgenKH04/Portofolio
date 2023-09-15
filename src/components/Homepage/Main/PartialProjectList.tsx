import { Link } from "react-router-dom";

import { Projects } from "../../../data/projects";
import { useLayoutContext } from "../../../contexts/layoutContext";
import { useLanguageContext } from "../../../contexts/languageContext";

export function PartialProjectList() {
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  const mobile = layoutContext;
  const isMobile = mobile ? 3 : 6;

  return (
    <div>
      {Projects.map((project, i) => {
        const { name, img, shortdescription } = project;
        if (i >= isMobile) return;
        return (
          <div key={img}>
            <img alt={`My project ${name}`} src={name} width="100px" />
            <div>
              <h3>{name}</h3>
              <p>{shortdescription}</p>
              <button type="button">Info</button>
            </div>
          </div>
        );
      })}
      <Link className="router_link router_link_button" to={"projects"}>
        {lang.moreprojects}
      </Link>
    </div>
  );
}
