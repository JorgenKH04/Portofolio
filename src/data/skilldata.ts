import * as htmlLogo from "../assets/skill-icons/HTML5 Logo Badge-cropped.svg";
import * as cssLogo from "../assets/skill-icons/icons8-css-cropped.svg";
import * as jsLogo from "../assets/skill-icons/icons8-javascript-cropped.svg";
import * as tsLogo from "../assets/skill-icons/icons8-typescript-cropped.svg";
import * as nextLogoDark from "../assets/skill-icons/next-js-dark.svg";
import * as nextLogoLight from "../assets/skill-icons/next-js-light.svg";
import * as reactLogo from "../assets/skill-icons/icons8-react-cropped.svg";
import * as csharpLogo from "../assets/skill-icons/icons8-c-sharp-logo-cropped.svg";
import * as nodeLogo from "../assets/skill-icons/icons8-nodejs-cropped.svg";
import * as mongodbLogo from "../assets/skill-icons/icons8-mongodb-cropped.svg";
import * as dockerLogo from "../assets/skill-icons/icons8-docker-cropped.svg";
import * as linuxLogo from "../assets/skill-icons/Tux-cropped.svg";
import * as gitLogo from "../assets/skill-icons/icons8-git-cropped.svg";
import * as figmaLogo from "../assets/skill-icons/icons8-figma-cropped.svg";
import * as photoshopLogo from "../assets/skill-icons/icons8-photoshop-cropped.svg";
import * as illustratorLogo from "../assets/skill-icons/icons8-illustrator-cropped.svg";

export const frontEnd = [
	{ img: htmlLogo.default, tech: "HTML" },
	{ img: cssLogo.default, tech: "CSS" },
	{ img: jsLogo.default, tech: "Javascript" },
	{ img: tsLogo.default, tech: "Typescript" },
	{
		img: nextLogoLight.default,
		imgLightMode: nextLogoDark.default,
		tech: "Next.js",
	},
	{ img: reactLogo.default, tech: "React" },
];

export const backEnd = [
	{ img: csharpLogo.default, tech: "C#" },
	{ img: nodeLogo.default, tech: "Node.js" },
	{ img: mongodbLogo.default, tech: "MongoDB" },
	{ img: dockerLogo.default, tech: "Docker" },
	{ img: linuxLogo.default, tech: "Linux" },
	{ img: gitLogo.default, tech: "Git" },
];

export const design = [
	{ img: figmaLogo.default, tech: "Figma" },
	{ img: photoshopLogo.default, tech: "Photoshop" },
	{ img: illustratorLogo.default, tech: "Illustrator" },
];
