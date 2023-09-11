import { useState } from "react";
import { LayoutBase } from "./layout/LayoutBase";
import { Language } from "./data/language";

function App() {
  const [language, setLanguage] = useState("nb-NO");
  const lang = new Language(language).lang;
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const layout = width <= 700 ? "mobile" : "pc";

  return (
    <LayoutBase layout={layout} setLanguage={setLanguage} lang={lang}>
      <h1>{layout === "pc" ? "nice" : "not nice"}</h1>
    </LayoutBase>
  );
}

export default App;
