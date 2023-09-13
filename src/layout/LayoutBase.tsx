import { Outlet } from "react-router-dom";

import { NavBar } from "../components/common/NavBar";
import { useThemeContext } from "../contexts/themeContext";
import "../css/styles.css";

export function LayoutBase() {
  const themeContext = useThemeContext();
  if (!themeContext) {
    console.log("themecontext Null");
    return null;
  }
  const theme = themeContext[0];
  return (
    <div className={`container ${theme}`}>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>temp</h2>
      </footer>
    </div>
  );
}
