import { frontEnd, backEnd, design } from "@data/skilldata";
import { useThemeContext } from "@contexts/themeContext";
import styles from "@css/Homepage/MySkills.module.css";

export function MySkills() {
  return (
    <div className={`myskills ${styles.myskills}`}>
      <h2>My Skills</h2>
      <div className={styles.myskills_skillgroups}>
        <div className={styles.myskills_skillgroups_group}>
          <h3>Front-End</h3>
          {frontEnd.map(({ img, tech, imgLightMode, creator, attribution }) => (
            <SkillShowcase
              key={tech}
              img={img}
              tech={tech}
              imgLightMode={imgLightMode}
              creator={creator}
              attribution={attribution}
            />
          ))}
        </div>
        <div className={styles.myskills_skillgroups_group}>
          <h3>Back-End</h3>
          {backEnd.map(({ img, tech, creator, attribution }) => (
            <SkillShowcase
              key={tech}
              img={img}
              tech={tech}
              creator={creator}
              attribution={attribution}
            />
          ))}
        </div>
        <div className={styles.myskills_skillgroups_group}>
          <h3>Design</h3>
          {design.map(({ img, tech, creator, attribution }) => (
            <SkillShowcase
              key={tech}
              img={img}
              tech={tech}
              creator={creator}
              attribution={attribution}
            />
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
  creator,
  attribution,
}: {
  img: string;
  tech: string;
  imgLightMode?: string;
  creator: string;
  attribution: string;
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
      <a href={attribution} target="blank_">
        <img
          src={currentImage}
          alt={`${tech}'s logo`}
          title={`${tech}'s icon taken from ${creator}`}
        />
        <p>{tech}</p>
      </a>
    </div>
  );
}
