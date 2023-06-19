

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
  faFilePdf,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
  faCodepen,

} from '@fortawesome/free-brands-svg-icons';
//import { GrDocumentPdf } from "react-icons/fa";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  expense,
  food,
  insta,
  avatar,
  bootstrapIcon,
  expressIcon,
  mongoIcon,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  bootstrapIcon,
  expressIcon,
  mongoIcon,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faCodepen,
faFilePdf,
faCode

};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "I am Sahil Singh Solanki, a final year B.Tech student specializing in Mathematics and Computing at MITS, Gwalior",

    " As an aspiring full stack developer, I am passionate about problem-solving and creating innovative solutions. I am good at problem-solving and believe that my strong foundation in mathematics, coupled with my programming skills, will enable me to excel in the field of web development",

    "Apart from coding, I enjoy playing cricket and listening to music. These hobbies help me to unwind and stay focused !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Expense-Tracker",
    description: 'This online application is a fully complete cost tracker developed with React that makes keeping tabs on your spending a breeze Features include the ability to input and categorize expenses as a configurable dashboard to view your spending patterns.',
    image: expense,
    source_code_link: 'https://github.com/sahil0605/Expense-Tracker-',
    demo_link: 'https://my-expense-tracker-12802.web.app/',
  },
  {
    name: 'Food-webpage',
    description: 'For a website that allows users to order meals, I created a ReactJS-based frontend that delivers a user-friendly interface,cutting-edge design concepts, and a smooth user experience',
    image: food,
    source_code_link: 'https://github.com/sahil0605/food-ordering-web',
    demo_link: 'https://food-on-door.onrender.com/',
  },
  {
    name: 'Instagram-Clone',
    description: 'Developed a full-stack Instagram clone using React, Node.js, and MongoDB Implemented user authentication, allowing users to sign up and sign in to the app ',
    image: insta,
    source_code_link: 'https://github.com/sahil0605/clone-insta-server',
    demo_link: '#',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  // {
  //   id: 'java',
  //   title: 'Java',
  //   icon: javaIcon,
  //   description:
  //     'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  // },
  // {
  //   id: 'aws',
  //   title: 'Amazon Web Services',
  //   icon: awsIcon,
  //   description:
  //     'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  // },
  // {
  //   id: 'figma',
  //   title: 'Figma',
  //   icon: figmaIcon,
  //   description:
  //   'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  // },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  // {
  //   id: 'psql',
  //   title: 'Postgresql',
  //   icon: psqlIcon,
  //   description:
  //     'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  // },
  // {
  //   id: 'vite',
  //   title: 'Vite',
  //   icon: viteIcon,
  //   description:
  //     'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  // },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'I have basic knowledge of python and its libraries',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over npm. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'express',
    title: 'Express js',
    icon: expressIcon,
    description:
      'Proficient in building web applications using Express.js framework for Node.js Experienced in developing RESTful APIs using Express.js',
  },
  {
    id: 'Mongo DB',
    title: 'Mongo DB',
    icon: mongoIcon,
    description:
      'Knowledgeable in using MongoDB for server-side JavaScript execution and other features',
  },
  {
    id: 'bootstrap',
    title: 'Bootstrap',
    icon: bootstrapIcon,
    description:
      'Experienced in creating modern and visually appealing user interfaces using Bootstrap',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
