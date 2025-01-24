import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Accwizz,
  Express,
  Aws,
  Fitness365,
  College
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name : "Express JS",
    icon : Express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name : "aws",
    icon : Aws
  }
];

const experiences = [
  {
    title: "Assistant Programmer",
    company_name: "AccWizz Bussiness Solutions Private Ltd.",
    icon: Accwizz,
    iconBg: "#FFF",
    date: "May 2024 - Present",
    points: [
      "Developed an enterprise web application for Housing Society accounting and billing, where bills are sent to members via WhatsApp and email, including a Pay Now button for immediate payment.",
      "Integrated CCAvenue payment gateway for seamless bill payments and voucher settlements.",
      "Created a mobile application for sales teams to track lead status and manage workforce efficiently.",
      " Utilized AWS services for hosting, storage, and resource computation, optimizing application performance.",
    ],
  },
];


const projects = [
  {
    name: "Fitness365",
    description:
      "Developed a fitness guidance web application for non-gym goers and beginners, gathering user data via a wellness survey during registration for BMI & BMR calculation. Dynamically allocated personalized diet plans and workout schedules that adapt to users progress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
       
      }
    ],
    image: Fitness365,
    source_code_link: "https://github.com/ZaidR07/Project",
    deploymentlink: "https://fitness365.vercel.app/"
  },
  {
    name: "College Dhundo",
    description:
      "Developed a one stop web application for surfing college campus across mumbai and its satellite cities. It includes colleges of various streams, level of education i.e. ' diploma, degree, master and doctorate 'and their respective entrance exams with their prospectus . ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Flowbite",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: College,
    source_code_link: "https://github.com/ZaidR07/College_Dhundo",
    deploymentlink: "https://college-dhundo.vercel.app/"
  },
  
];



export { services, technologies, experiences, projects };
