import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LayoutBase } from "./layout/LayoutBase";
import { Homepage } from "./Pages/Homepage";
import "./css/styles.css";

function App() {
  return (
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
  );
}

export default App;
