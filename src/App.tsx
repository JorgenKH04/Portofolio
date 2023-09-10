import { useEffect, useState } from "react";
import { LayoutBase } from "./layout/LayoutBase";

function App() {
  const [language, setLanguage] = useState("nb-NO");
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const layout = width <= 700 ? "mobile" : "pc";

  useEffect(() => console.log("language change"), [language]);

  return (
    <LayoutBase layout={layout} language={language} setLanguage={setLanguage}>
      <h1>{layout === "pc" ? "nice" : "not nice"}</h1>
    </LayoutBase>
  );
}

export default App;
