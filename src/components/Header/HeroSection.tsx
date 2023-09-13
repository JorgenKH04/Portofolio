import { useLanguageContext } from "../../contexts/languagecontext";
import * as mov1 from "../../assets/animation/dark-mode-animation.webm";

export function HeroSection({ layout }: { layout: string }) {
  const languageContext = useLanguageContext();
  if (!languageContext) return null;
  const lang = languageContext[0];

  return (
    <div>
      {layout === "mobile" ? null : (
        // rome-ignore lint/a11y/useMediaCaption: <explanation>
        <video loop autoPlay width="100%" height="100%">
          <source src={mov1.default} />
        </video>
      )}
      <h1>{lang.greeting}</h1>
      <p>{lang.introparagraph1}</p>
      <button type="button">{lang.contactbutton}</button>
      <button type="button">{lang.projectsbutton}</button>
    </div>
  );
}
