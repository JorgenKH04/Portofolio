import { Link } from "react-router-dom";

import { Projects } from "@data/projects";

export function ProjectPage() {
  return (
    <div>
      <h1>PROJECTS</h1>
      {Projects.map((project) => {
        const { name, img, shortdescription } = project;
        return (
          <div key={name}>
            <img src={img} alt={`Preview of ${name}`} />
            <h2>{name}</h2>
            <p>{shortdescription}</p>
            <Link to={name}>More</Link>
          </div>
        );
      })}
    </div>
  );
}
