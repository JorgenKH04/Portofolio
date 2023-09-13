import { Outlet } from "react-router-dom";

import { NavBar } from "../components/common/NavBar";
import { LanguageProvider } from "../contexts/languageContext";
import { LayoutProvider } from "../contexts/layoutContext";
import { ThemeProvider } from "../contexts/themeContext";

export function LayoutBase() {
  return (
    <LanguageProvider>
      <LayoutProvider>
        <ThemeProvider>
          <header>
            <NavBar />
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <h2>temp</h2>
          </footer>
        </ThemeProvider>
      </LayoutProvider>
    </LanguageProvider>
  );
}
