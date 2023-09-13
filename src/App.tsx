import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LayoutBase } from "./layout/LayoutBase";
import { Homepage } from "./Pages/Homepage";
import { LanguageProvider } from "./contexts/languageContext";
import { LayoutProvider } from "./contexts/layoutContext";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <LanguageProvider>
      <LayoutProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LayoutBase />}>
                <Route index element={<Homepage />} />
                <Route path="aboutme" element={<h1>About me</h1>} />
                <Route path="contact" element={<h1>Contact</h1>} />
                <Route path="projects" element={<h1>Projects</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LayoutProvider>
    </LanguageProvider>
  );
}

export default App;
