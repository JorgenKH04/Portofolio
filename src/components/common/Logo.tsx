import { Link } from "react-router-dom";

import styles from "@/css/common/logo.module.css";
import { useThemeContext } from "@/contexts/themeContext";
import * as darkLogo from "@/assets/logo/Logo1-dark64x64.png";
import * as lightLogo from "@/assets/logo/Logo1-light64x64.png";

export function Logo() {
  const themeContext = useThemeContext();
  const theme = themeContext[0];
  return (
    <Link className={styles.logo} to={"/"}>
      <img
        src={theme === "light" ? darkLogo.default : lightLogo.default}
        alt="My logo"
      />
      <h1>JORGEN</h1>
    </Link>
  );
}
