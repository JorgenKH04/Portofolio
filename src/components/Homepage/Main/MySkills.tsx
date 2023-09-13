import { frontEnd, backEnd, design } from "../../../data/skilldata";

export function MySkills() {
  return (
    <div>
      <h2>My Skills</h2>
      <div>
        <h3>Front-End</h3>
        {frontEnd.map(({ img, tech }) => (
          <SkillShowcase key={tech} img={img} tech={tech} />
        ))}
      </div>
      <div>
        <h3>Back-End</h3>
        {backEnd.map(({ img, tech }) => (
          <SkillShowcase key={tech} img={img} tech={tech} />
        ))}
      </div>
      <div>
        <h3>Design</h3>
        {design.map(({ img, tech }) => (
          <SkillShowcase key={tech} img={img} tech={tech} />
        ))}
      </div>
    </div>
  );
}

function SkillShowcase({ img, tech }: { img: string; tech: string }) {
  if (!img) return;
  return (
    <div>
      {/* Remove height from this */}
      <img height="40px" src={img} alt={`${tech}'s logo`} />
      <p>{tech}</p>
    </div>
  );
}
