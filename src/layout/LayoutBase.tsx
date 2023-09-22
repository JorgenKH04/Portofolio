import { Outlet } from "react-router-dom";

import { NavBar } from "@components/common/NavBar";
import { Footer } from "@components/common/Footer";
import { useThemeContext } from "@contexts/themeContext";
import "@css/styles.css";
import "@css/common/darktheme.css";
import "@css/common/lighttheme.css";

export function LayoutBase() {
  const themeContext = useThemeContext();
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
        <Footer />
      </footer>
    </div>
  );
}
