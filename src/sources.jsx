import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics, IoMdCloud} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode, FaDatabase, FaServer} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiBlockchaindotcom, SiExpress,SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
]

export const whyChooseMe = [
  {
    title: "Unparalleled Technical Expertise",
    icon: <GrUserExpert/>,
    link: "",
  },
  {
    title: "Data Driven Solutions",
    icon: <IoMdAnalytics/>,
    link: "",
  },
  {
    title: "Dedicated Client Support",
    icon: <MdOutlineSupportAgent/>,
    link: "",
  },
  {
    title: "Innovative Problem Solving",
    icon: <RiExchange2Fill/>,
    link: "",
  },
  {
    title: "Agile Development Approach",
    icon: <FaLaptopCode/>,
    link: "",
  },
  {
    title: "Cybersecurity Focus",
    icon: <IoMdAnalytics/>,
    link: "",
  },
  {
    title: "Continuous Learning",
    icon: <TfiWrite/>,
    link: "",
  },
  {
    title: "Collaborative Mindset",
    icon: <MdOutlineSupportAgent/>,
    link: "",
  },
]

export const services = [
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush/>,
    description: `I create intuitive and visually appealing user interfaces that enhance user experience. 
    By combining aesthetics with functionality, I ensure your digital products not only look great but also 
    provide seamless interaction for your users.`,
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode/>,
    description: `From responsive websites to complex web applications, I deliver robust solutions 
    using cutting edge technologies. My full stack expertise ensures end to end development that meets 
    your business needs while providing optimal performance and scalability.`,
  },
  {
    name: "Content Creation",
    icon: <TfiWrite/>,
    description: `I craft compelling digital content that engages your audience and strengthens your brand. 
    Whether it's blog posts, social media content, or technical documentation, I ensure your message is 
    clear, concise, and impactful.`,
  },
  {
    name: "Cybersecurity Solutions",
    icon: <IoMdAnalytics/>,
    description: `I implement robust security measures to protect your digital assets from potential threats. 
    My expertise in cybersecurity ensures that your applications and systems are fortified against 
    vulnerabilities, giving you peace of mind in an increasingly digital world.`,
  },
  {
    name: "Mobile App Development",
    icon: <TbBrandReactNative/>,
    description: `I develop cross platform mobile applications that provide seamless user experiences 
    across different devices. Using React Native, I create efficient, high performance apps that feel 
    native on both iOS and Android platforms.`,
  },
  {
    name: "Database Design & Management",
    icon: <FaDatabase/>,
    description: `I design and implement efficient, scalable database solutions tailored to your specific needs. 
    From data modeling to query optimization, I ensure your data is structured for optimal performance and easy maintenance.`,
  },
  {
    name: "API Development",
    icon: <FaServer/>,
    description: `I create robust, well documented APIs that power seamless communication between different 
    software systems. Whether RESTful or GraphQL, my APIs are designed for efficiency, scalability, and ease of integration.`,
  },
  {
    name: "Cloud Solutions",
    icon: <IoMdCloud/>,
    description: `I leverage cloud technologies to build scalable, resilient applications. From serverless 
    architectures to containerized deployments, I help you harness the full potential of cloud platforms like AWS, 
    Azure, or Google Cloud.`,
  },
  {
    name: "Blockchain Development",
    icon: <SiBlockchaindotcom/>,
    description: `I develop decentralized applications (dApps) and smart contracts, leveraging blockchain 
    technology to create secure, transparent, and efficient solutions for various industries.`,
  },
]


export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
      },
      {
        skill: "Sketch",
        level: "Intermediate",
      },
      {
        skill: "Adobe XD",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "React Native",
        level: "Experienced",
      },
    ]
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
      },
      {
        skill: "Express.js",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
      },
      {
        skill: "PHP",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Intermediate",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
    ]
  },
  {
    title: "App Development",
    data: [
      {
        skill: "React Native",
        level: "Experienced",
      },
      {
        skill: "Flutter",
        level: "Intermediate",
      },
      {
        skill: "iOS (Swift)",
        level: "Basic",
      },
      {
        skill: "Android (Kotlin)",
        level: "Basic",
      },
    ]
  },
  {
    title: "Cybersecurity",
    data: [
      {
        skill: "Network Security",
        level: "Experienced",
      },
      {
        skill: "Penetration Testing",
        level: "Intermediate",
      },
      {
        skill: "Security Auditing",
        level: "Experienced",
      },
    ]
  },
  {
    title: "Cloud & DevOps",
    data: [
      {
        skill: "AWS",
        level: "Intermediate",
      },
      {
        skill: "Docker",
        level: "Intermediate",
      },
      {
        skill: "Kubernetes",
        level: "Basic",
      },
      {
        skill: "CI/CD Pipelines",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Database Management",
    data: [
      {
        skill: "SQL",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
      },
      {
        skill: "Redis",
        level: "Basic",
      },
      {
        skill: "Database Optimization",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "API Development",
    data: [
      {
        skill: "RESTful APIs",
        level: "Experienced",
      },
      {
        skill: "GraphQL",
        level: "Intermediate",
      },
      {
        skill: "Swagger/OpenAPI",
        level: "Intermediate",
      },
      {
        skill: "API Security",
        level: "Experienced",
      },
    ]
  },
  {
    title: "Emerging Technologies",
    data: [
      {
        skill: "Blockchain",
        level: "Basic",
      },
      {
        skill: "Machine Learning",
        level: "Basic",
      },
      {
        skill: "IoT Development",
        level: "Intermediate",
      },
      {
        skill: "Serverless Architecture",
        level: "Intermediate",
      },
    ]
  },
]

export const projects = [
  { 
    id: 1,
    title: 'AI Powered School',
    image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
    category: "UI/UX",
    description: `Imagine a learning platform where AI becomes your personal tutor. Our School UI Design 
    revolutionizes education, offering an intuitive interface that adapts to each student's unique learning style. 
    Smart features like personalized study plans and real time progress tracking make learning engaging and 
    efficient. Step into the future of education where technology and pedagogy blend seamlessly.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "XD",
        icon: <SiAdobexd/>,
        iconColor: "skyblue",
      },
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Application',
    image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
    category: "Web",
    description: `Elevate your online shopping experience with our state of the art E-Commerce Application. 
    Seamlessly blending aesthetics with functionality, our platform offers more than just transactions, it creates 
    shopping experiences. From AI powered product recommendations to one click checkouts, every feature is 
    designed to delight your customers and boost your conversions. Welcome to the future of online retail.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact/>,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs/>,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb/>,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 3,
    title: 'Robotic Engineering Web Application',
    image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
    category: "Web",
    description: `Step into the world of tomorrow with our Robotic Engineering Web Application. 
    This platform is where imagination meets innovation, allowing engineers to design, simulate, 
    and optimize robotic systems with unprecedented ease. From drag and drop component assembly 
    to real time 3D visualization, we're not just building robots, we're crafting the future of automation.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact/>,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs/>,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb/>,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 4,
    title: 'Project Management application',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
    category: "Apps",
    description: `Say goodbye to chaotic project management and hello to streamlined success. 
    Our intuitive Project Management application turns complex workflows into a breeze. With 
    real time collaboration, customizable dashboards, and intelligent task prioritization, 
    your team's productivity will soar to new heights. It's not just about managing projects,
    it's about empowering teams to achieve greatness.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative/>,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs/>,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb/>,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 5,
    title: 'Mobile bank - App Design',
    image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
    category: "UI/UX",
    description: `Banking reimagined for the digital age. Our Mobile Bank app design puts financial 
    power at your fingertips with a sleek, intuitive interface. From seamless transactions to 
    personalized financial insights, every tap brings you closer to your financial goals. It's not 
    just a banking app, it's your personal financial companion, available 24/7.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "Figma",
        icon: <CgFigma/>,
        iconColor: "orangered",
      },
    ]
  },
  {
    id: 6,
    title: 'Quiz App Development',
    image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
    category: "Apps",
    description: `Learning meets excitement in our innovative Quiz App. Designed to make knowledge 
    acquisition addictive, this app turns every question into an opportunity for growth. With 
    adaptive difficulty levels, multimedia content, and social learning features, it transforms 
    the way people engage with information. Get ready to quiz, learn, and grow, all at the tap of a screen.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative/>,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs/>,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb/>,
        iconColor: "limegreen",
      },
    ]
  },
]

export const clients = [
  {
    image: client1,
    name: 'Alex Thompson',
    review: `Working with Awe Joseph was a game changer for our startup. His technical expertise 
             and innovative approach transformed our ideas into a robust, scalable platform. What 
             impressed me most was his ability to anticipate potential security issues and address 
             them proactively. A true professional who delivers beyond expectations!`
  },
  {
    image: client2,
    name: 'Sarah Chen',
    review: `I can't speak highly enough of Awe Joseph's work. He took our outdated website and 
             turned it into a modern, user friendly interface that has significantly improved our 
             customer engagement. His attention to detail and commitment to delivering a secure, 
             high performance solution was evident throughout the project.`
  },
  {
    image: client3,
    name: 'Michael Okonkwo',
    review: `Awe Joseph's expertise in both frontend and backend development was crucial in 
             building our complex web application. He navigated challenging technical requirements 
             with ease and always kept us informed about the progress. His cybersecurity insights 
             added an extra layer of value to the project. Highly recommended!`
  },
  {
    image: client4,
    name: 'Emily Rodriguez',
    review: `We hired Awe Joseph to develop a mobile app for our business, and the results exceeded 
             our expectations. His proficiency in React Native delivered a smooth, responsive app 
             that our users love. Moreover, his proactive approach to security gave us confidence 
             in the integrity of our product.`
  },
  {
    image: client5,
    name: 'David Nwosu',
    review: `Awe Joseph's technical skills are matched only by his excellent communication and 
             project management abilities. He took the time to understand our business needs and 
             delivered a solution that not only met but exceeded our requirements. His cybersecurity 
             expertise was an added bonus that ensured our peace of mind.`
  },
];


export const contactOptions = [
  {
    title:"Email",
    value:"awejosepholaitan@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+2349034018552",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Lagos, Nigeria",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"",
    },
    {
      name:"Facebook",
      icon:<FaFacebookSquare/>,
      link:"",
    },
    {
      name:"Twitter",
      icon:<FaXTwitter/>,
      link:"",
    },
    {
      name:"Youtube",
      icon:<FaYoutube/>,
      link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

    