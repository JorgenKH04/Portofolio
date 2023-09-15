import { frontEnd, backEnd, design } from "../../../data/skilldata";
import { useThemeContext } from "../../../contexts/themeContext";

export function MySkills() {
  return (
    <div>
      <h2>My Skills</h2>
      <div>
        <h3>Front-End</h3>
        {frontEnd.map(({ img, tech, imgLightMode }) => (
          <SkillShowcase
            key={tech}
            img={img}
            tech={tech}
            imgLightMode={imgLightMode}
          />
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

function SkillShowcase({
  img,
  tech,
  imgLightMode,
}: {
  img: string;
  tech: string;
  imgLightMode?: string;
}) {
  const themeContext = useThemeContext();
  if (!themeContext) return null;
  const theme = themeContext[0];

  if (!img) return;
  let currentImage = img;
  if (imgLightMode && theme === "light") {
    console.log(imgLightMode);
    currentImage = imgLightMode;
  }
  return (
    <div>
      {/* Remove height from this */}
      <img height="40px" src={currentImage} alt={`${tech}'s logo`} />
      <p>{tech}</p>
    </div>
  );
}
