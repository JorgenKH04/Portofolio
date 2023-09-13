import { Projects } from "../../../data/projects";
import { useLayoutContext } from "../../../contexts/layoutContext";
import { useLanguageContext } from "../../../contexts/languageContext";

export function PartialProjectList() {
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];
  const layout = layoutContext;
  const isMobile = layout ? 3 : 6;

  return (
    <>
      {Projects.map((project, i) => {
        if (i >= isMobile) return;
        return (
          <div key={project.name}>
            <img
              alt={`My project ${project.name}`}
              src={project.img}
              width="100px"
            />
            <div>
              <h3>{project.name}</h3>
              <p>{project.shortdescription}</p>
              <button type="button">{lang.moreprojects}</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
