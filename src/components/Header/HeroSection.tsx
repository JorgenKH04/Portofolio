import { LanguageType } from "../../data/language";

export function HeroSection({
  lang,
  layout,
}: {
  lang: LanguageType;
  layout: string;
}) {
  return (
    <div>
      <h1>{lang.greeting}</h1>
      <p>{lang.introparagraph1}</p>
      {/* <button type="button">{language ===}</button>
      <button type="button"></button> */}
    </div>
  );
}
