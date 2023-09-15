import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import { useLayoutContext } from "../../contexts/layoutContext";
import { useLanguageContext } from "../../contexts/languageContext";
import { useThemeContext } from "../../contexts/themeContext";

export function Footer() {
  const layoutContext = useLayoutContext();
  const languageContext = useLanguageContext();
  const themeContext = useThemeContext();
  if (!languageContext || !themeContext) return null;
  const lang = languageContext[0];
  const theme = themeContext[0];
  const mobile = layoutContext;
  const svgColor = theme === "dark" ? "#B2D9F6" : "#000514";
  return (
    <>
      {mobile ? null : (
        <div>
          <Logo />
          <small>@2023 Jorgen</small>
        </div>
      )}

      <div>
        <div>
          <Link className="router_link_button" to={"aboutme"}>
            {lang.aboutme}
          </Link>
          <Link className="router_link_button" to={"contact"}>
            {lang.contact}
          </Link>
          <Link className="router_link_button" to={"projects"}>
            {lang.projects}
          </Link>
        </div>
        <div>
          <h1>MISC</h1>
        </div>
        <div>
          <h3>GET IN TOUCH</h3>
          <p>MY EMAIL</p>
          <div>
            <a href="https://github.com/JorgenKH04" target="blank_">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 46 44.85">
                <title>https://github.com/JorgenKH04</title>{" "}
                <path
                  fill={svgColor}
                  d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/j%C3%B8rgen-kulleseid-306458220"
              target="blank_"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 42 42">
                <title>
                  https://www.linkedin.com/in/j%C3%B8rgen-kulleseid-306458220
                </title>{" "}
                <path
                  fill={svgColor}
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                />
              </svg>
            </a>
            <a href="https://t.me/JorgenDev" target="blank_">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 46 46">
                <title>https://t.me/JorgenDev</title>
                <path
                  fill={svgColor}
                  d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219 c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966 c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693 c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351 c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {!mobile ? null : (
        <div>
          <Logo />
          <small>@2023 Jorgen</small>
        </div>
      )}
    </>
  );
}
