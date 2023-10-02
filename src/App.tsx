import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { LayoutBase } from "@layout/LayoutBase";
import { Homepage } from "@components/Pages/Homepage";
// import { ProjectPage } from "@components/Pages/ProjectPage";
// import { Attribution } from "@components/Pages/Attribution";
import { InDevelopment } from "@components/common/InDevelopment";
import { LanguageProvider } from "@contexts/languageContext";
import { LayoutProvider } from "@contexts/layoutContext";
import { ThemeProvider } from "@contexts/themeContext";

function App() {
  return (
    <LanguageProvider>
      <LayoutProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<LayoutBase />}>
                  <Route index={true} element={<Homepage />} />
                  <Route path="projects" element={<InDevelopment />} />
                  <Route path="attribution" element={<InDevelopment />} />
                  <Route path="projects/:project" element={<InDevelopment />} />
                </Route>
              </Routes>
            </ScrollToTop>
          </BrowserRouter>
        </ThemeProvider>
      </LayoutProvider>
    </LanguageProvider>
  );
}

function ScrollToTop({ children }: { children: ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
}

export default App;
