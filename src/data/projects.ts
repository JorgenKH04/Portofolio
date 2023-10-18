import * as weatherTrackr from '@assets/project-images/weatherTrackr.png';
import * as cryptify from '@assets/project-images/cryptify.png';
import * as taskbuddy from '@assets/project-images/taskbuddy.png';
import * as portfolio from '@assets/project-images/portofolio.png';
import * as temp from '@assets/project-images/temp.jpg';

export const Projects = [
  {
    name: 'Portofolio',
    github: 'https://github.com/JorgenKH04/Portofolio',
    netlify: 'https://jorgen-portofolio.netlify.app/',
    tagline: '',
    shortdescription: `This is my portfolio website that showcases 
    my skills and experience in web development, including front-end development, 
    back-end development, and user experience design.`,
    img: portfolio.default,
    role: '',
  },
  {
    name: 'Cryptify',
    github: 'https://github.com/rondDev/cryptify/tree/master',
    netlify: '',
    tagline: '',
    shortdescription: `An all-in-one web app for base64 encoding, hex-text conversion, 
			MD5/SHA1 hashing, URL encoding/decoding, JSON web tokens, 
			case modification, and whitespace removal.`,
    img: cryptify.default,
    role: '',
  },

  {
    name: 'CodeProbe',
    github: 'https://github.com/JorgenKH04/CodeProbe',
    netlify: '',
    tagline: 'Explore the world of open source developers.',
    shortdescription: `CodeProbe is a GitHub profile viewer that helps you learn more about the developers 
    behind open source projects. Browse their contributions, areas of expertise, and past and current projects.`,
    img: temp.default,
    role: '',
  },

  {
    name: 'Taskbuddy',
    github: 'https://github.com/JorgenKH04/TaskBuddy',
    netlify: '',
    tagline: '',
    shortdescription: `Discover a powerful task management app that allows you to effortlessly 
			create, track, and organize your tasks. Seamlessly save tasks to local storage, 
			mark them as completed or incomplete, and conveniently sort them alphabetically or by creation time. 
			Stay productive and organized with this intuitive task management solution.`,
    img: taskbuddy.default,
    role: '',
  },

  {
    name: 'WeatherTrackr',
    github: 'https://github.com/JorgenKH04/WeatherTrackr',
    netlify: '',
    tagline: '',
    shortdescription: `WeatherTrackr utilizes an API to gather weather data for the next 
			five days on one tab and the next five hours on another. This allows you to 
			conveniently access and plan around detailed forecasts, 
			helping you make informed decisions based on upcoming weather conditions.`,
    img: weatherTrackr.default,
    role: '',
  },

  {
    name: '6',
    github: 'https://github.com/JorgenKH04/Portofolio',
    netlify: 'https://jorgen-portofolio.netlify.app/',
    tagline: '',
    shortdescription: 'Empty proj',
    img: temp.default,
    role: '',
  },
];
