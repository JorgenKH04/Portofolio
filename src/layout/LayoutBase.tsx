import { NavBar } from "../components/Header/NavBar";
// import * as mov1 from "../assets/dark-mode-animation.webm";

export function LayoutBase({
  children,
  layout,
  language,
  setLanguage,
}: {
  children: React.ReactNode;
  layout: string;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <header>
        <NavBar layout={layout} setLanguage={setLanguage} language={language} />
        {/* rome-ignore lint/a11y/useMediaCaption: <explanation>
        <video loop autoPlay width="100%">
          <source src={mov1.default} />
        </video> */}
      </header>
      <main>{children}</main>
      <footer>
        <h2>temp</h2>
      </footer>
    </>
  );
}
