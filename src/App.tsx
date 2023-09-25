import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LayoutBase } from "@layout/LayoutBase";
import { Homepage } from "@components/Pages/Homepage";
import { ProjectPage } from "@components/Pages/ProjectPage";
import { LanguageProvider } from "@contexts/languageContext";
import { LayoutProvider } from "@contexts/layoutContext";
import { ThemeProvider } from "@contexts/themeContext";

function App() {
  return (
    <LanguageProvider>
      <LayoutProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LayoutBase />}>
                <Route index={true} element={<Homepage />} />
                <Route path="projects" element={<ProjectPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LayoutProvider>
    </LanguageProvider>
  );
}

export default App;
