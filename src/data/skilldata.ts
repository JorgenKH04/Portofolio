import * as htmlLogo from '@assets/skill-icons/HTML5 Logo Badge-cropped.svg';
import * as cssLogo from '@assets/skill-icons/icons8-css-cropped.svg';
import * as jsLogo from '@assets/skill-icons/icons8-javascript-cropped.svg';
import * as tsLogo from '@assets/skill-icons/icons8-typescript-cropped.svg';
import * as nextLogoDark from '@assets/skill-icons/next-js-dark.svg';
import * as nextLogoLight from '@assets/skill-icons/next-js-light.svg';
import * as reactLogo from '@assets/skill-icons/icons8-react-cropped.svg';
import * as csharpLogo from '@assets/skill-icons/icons8-c-sharp-logo-cropped.svg';
import * as nodeLogo from '@assets/skill-icons/icons8-nodejs-cropped.svg';
import * as mongodbLogo from '@assets/skill-icons/icons8-mongodb-cropped.svg';
import * as dockerLogo from '@assets/skill-icons/icons8-docker-cropped.svg';
import * as linuxLogo from '@assets/skill-icons/Tux-cropped.svg';
import * as gitLogo from '@assets/skill-icons/icons8-git-cropped.svg';
import * as figmaLogo from '@assets/skill-icons/icons8-figma-cropped.svg';
import * as photoshopLogo from '@assets/skill-icons/icons8-photoshop-cropped.svg';
import * as illustratorLogo from '@assets/skill-icons/icons8-illustrator-cropped.svg';

export const frontEnd = [
  {
    img: htmlLogo.default,
    tech: 'HTML',
    creator: 'logos-download',
    attribution: 'https://logos-download.com/18471-html5-logo-download.html',
  },
  { img: cssLogo.default, tech: 'CSS', creator: 'Icons8', attribution: 'https://icons8.com/icon/21278/css3' },
  { img: jsLogo.default, tech: 'Javascript', creator: 'Icons8', attribution: 'https://icons8.com/icon/108784/javascript' },
  { img: tsLogo.default, tech: 'Typescript', creator: 'Icons8', attribution: 'https://icons8.com/icon/uJM6fQYqDaZK/typescript' },
  {
    img: nextLogoLight.default,
    imgLightMode: nextLogoDark.default,
    tech: 'Next.js',
    creator: 'seekicon',
    attribution: 'https://seekicon.com/free-icon/next-js_1',
  },
  { img: reactLogo.default, tech: 'React', creator: 'Icons8', attribution: 'https://icons8.com/icon/NfbyHexzVEDk/react' },
];

export const backEnd = [
  { img: csharpLogo.default, tech: 'C#', creator: 'Icons8', attribution: 'https://icons8.com/icon/55251/c-sharp-logo' },
  { img: nodeLogo.default, tech: 'Node.js', creator: 'Icons8', attribution: 'https://icons8.com/icon/54087/nodejs' },
  { img: mongodbLogo.default, tech: 'MongoDB', creator: 'Icons8', attribution: 'https://icons8.com/icon/74402/mongodb' },
  { img: dockerLogo.default, tech: 'Docker', creator: 'Icons8', attribution: 'https://icons8.com/icon/cdYUlRaag9G9/docker' },
  { img: linuxLogo.default, tech: 'Linux', creator: 'logo wine', attribution: 'https://www.logo.wine/logo/Linux' },
  { img: gitLogo.default, tech: 'Git', creator: 'Icons8', attribution: 'https://icons8.com/icon/20906/git' },
];

export const design = [
  { img: figmaLogo.default, tech: 'Figma', creator: 'Icons8', attribution: 'https://icons8.com/icon/zfHRZ6i1Wg0U/figma' },
  { img: photoshopLogo.default, tech: 'Photoshop', creator: 'Icons8', attribution: 'https://icons8.com/icon/13677/adobe-photoshop' },
  { img: illustratorLogo.default, tech: 'Illustrator', creator: 'Icons8', attribution: 'https://icons8.com/icon/13631/adobe-illustrator' },
];
