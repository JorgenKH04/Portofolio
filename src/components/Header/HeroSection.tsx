export function HeroSection({ language }: { language: string }) {
  const NorParagraph =
    "Jeg er en 20 år gammel webutvikler med en lidenskap for teknologi. Jeg har tatt et frontend-fokusert kurs som heter Kodehode de siste 6 månedene hvor jeg har fått en god innføring i HTML, CSS, Js/Ts, React, Figma. Jeg er veldig spent på å bruke de nye evnene mine på en praksisplass.";
  const EngParagraph =
    "I am a 20 year old web developer with a passion for tech. I have been taking a frontend focused course called Kodehode the past 6 months where I’ve gotten a good hang of HTML, CSS, Js/Ts, React, Figma. I am very excited to put my new abilities to work in an internship.";
  return (
    <div>
      <h1>
        {language === "nb-NO"
          ? "Hei, jeg heter Jørgen"
          : "Hey, my name is Jørgen"}
      </h1>
      <p>{language === "nb-NO" ? NorParagraph : EngParagraph}</p>
      {/* <button type="button">{language ===}</button>
      <button type="button"></button> */}
    </div>
  );
}
