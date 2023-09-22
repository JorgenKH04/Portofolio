import { frontEnd, backEnd, design } from "@data/skilldata.ts";
import { useThemeContext } from "@contexts/themeContext.ts";
import styles from "@/css/Homepage/MySkills.module.css";

export function MySkills() {
  return (
    <div className={`myskills ${styles.myskills}`}>
      <h2>My Skills</h2>
      <div className={styles.myskills_skillgroups}>
        <div className={styles.myskills_skillgroups_group}>
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
        <div className={styles.myskills_skillgroups_group}>
          <h3>Back-End</h3>
          {backEnd.map(({ img, tech }) => (
            <SkillShowcase key={tech} img={img} tech={tech} />
          ))}
        </div>
        <div className={styles.myskills_skillgroups_group}>
          <h3>Design</h3>
          {design.map(({ img, tech }) => (
            <SkillShowcase key={tech} img={img} tech={tech} />
          ))}
        </div>
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
  if (!themeContext) {
    return;
  }
  const theme = themeContext[0];

  if (!img) {
    return;
  }
  let currentImage = img;
  if (imgLightMode && theme === "light") {
    currentImage = imgLightMode;
  }
  return (
    <div>
      {/* Remove height from this */}
      <img src={currentImage} alt={`${tech}'s logo`} />
      <p>{tech}</p>
    </div>
  );
}
