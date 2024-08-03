import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
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
    title: "Data-Driven Solutions",
    icon: <IoMdAnalytics/>,
    link: "",
  },
  {
    title: "Dedicated Client Support",
    icon: <MdOutlineSupportAgent/>,
    link: "",
  },
  {
    title: "Innovative Problem-Solving",
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
    using cutting-edge technologies. My full-stack expertise ensures end-to-end development that meets 
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
    description: `I develop cross-platform mobile applications that provide seamless user experiences 
    across different devices. Using React Native, I create efficient, high-performance apps that feel 
    native on both iOS and Android platforms.`,
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
    title: "DevOps & Tools",
    data: [
      {
        skill: "Git",
        level: "Experienced",
      },
      {
        skill: "Docker",
        level: "Intermediate",
      },
      {
        skill: "CI/CD",
        level: "Intermediate",
      },
      {
        skill: "AWS",
        level: "Intermediate",
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
]



export const projects = [
  { 
    id:1,
    title: 'AI Powered School',
    image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
    category:"UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"XD",
        icon: <SiAdobexd/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:2,
    title: 'E-Commerce Application',
    image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
    category:"Web",
    description:`Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:3,
    title: 'Robotic Engineering Web Application',
    image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
    category:"Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
      {
        name:"MongoDBT",
        icon: <SiMongodb/>,
      },
      {
        name:"MongoDBT",
        icon: <SiMongodb/>,
      },
      {
        name:"MongoDBT",
        icon: <SiMongodb/>,
      },
    ]
  },
  {
    id:4,
    title: 'Project Management application',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
    category:"Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:5,
    title: 'Mobile bank - App Design',
    image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
    category:"UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
    ]
  },
  {
    id:6,
    title: 'Quiz App Development',
    image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
    category:"Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
      demoLink: "https://google.com/",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
]

export const clients = [
  {
    image: client1,
    name: 'Alex Thompson',
    review: `Working with Awe Joseph was a game-changer for our startup. His technical expertise 
             and innovative approach transformed our ideas into a robust, scalable platform. What 
             impressed me most was his ability to anticipate potential security issues and address 
             them proactively. A true professional who delivers beyond expectations!`
  },
  {
    image: client2,
    name: 'Sarah Chen',
    review: `I can't speak highly enough of Awe Joseph's work. He took our outdated website and 
             turned it into a modern, user-friendly interface that has significantly improved our 
             customer engagement. His attention to detail and commitment to delivering a secure, 
             high-performance solution was evident throughout the project.`
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

    