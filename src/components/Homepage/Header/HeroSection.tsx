import { Link } from "react-router-dom";

import { useLanguageContext } from "../../../contexts/languageContext";
import { useLayoutContext } from "../../../contexts/layoutContext";
import { useThemeContext } from "../../../contexts/themeContext";
import * as darkAnimation from "../../../assets/animation/dark-mode-animation.webm";
import * as lightAnimation from "../../../assets/animation/light-mode-animation.webm";
import styles from "../../../css/Homepage/Herosection.module.css";

export function HeroSection() {
  const themeContext = useThemeContext();
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  if (!languageContext || !themeContext) return null;
  const lang = languageContext[0];
  const theme = themeContext[0];
  const mobile = layoutContext;

  function AnimationLogic() {
    if (mobile) return null;
    return (
      <>
        {/* rome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <video
          loop
          autoPlay
          className={`${styles.hero_animation} ${
            theme === "light" ? "animation" : "none"
          }`}
        >
          <source src={lightAnimation.default} />
        </video>
        {/* rome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <video
          loop
          autoPlay
          className={`${styles.hero_animation} ${
            theme === "dark" ? "animation" : "none"
          }`}
        >
          <source src={darkAnimation.default} />
        </video>
      </>
    );
  }

  return (
    <div className={`hero ${styles.hero}`}>
      {AnimationLogic()}
      <div className={`hero_intro ${styles.hero_intro}`}>
        <h1>{lang.greeting}</h1>
        <p>{lang.introparagraph1}</p>
        <div className={styles.hero_buttons}>
          <Link to={"/contact"} type="button">
            {lang.contactbutton}
          </Link>
          <Link to={"/projects"}>{lang.projectsbutton}</Link>
        </div>
      </div>
    </div>
  );
}
