import client1 from "../assets/client-1.jpeg";
import client2 from "../assets/client-2.jpeg";
import client3 from "../assets/client-3.jpeg";
import client4 from "../assets/client-4.jpeg";
import client5 from "../assets/client-5.jpeg";
import blogWebsite from "../assets/blog-website.png";
import animationPortfolio from "../assets/3D-animation-portfolio.png";
import interactiveTerminal from "../assets/interactive-terminal-website.png";
import terminalPortfolio from "../assets/terminal-portfolio-showcase.png";
import dynamicTerminal from "../assets/dynamic-terminal-portfolio.png";
import globalRelocate from "../assets/global-relocate.png";
import seamless from "../assets/seamless.png";
import {
  FaChartBar,
  FaCloud,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserCheck,
  FaHeadset,
  FaSyncAlt,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaInstagram,
  FaGithub,
  FaPaintBrush,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaLinkedin,
  FaHandsHelping,
} from "react-icons/fa";
import {
  SiWakatime,
  SiExpress,
  SiMongodb,
  SiSwift,
  SiKotlin,
  SiPostman,
  SiXcode,
  SiFlutter,
  SiAdobexd,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiSvelte,
  SiPrismic,
  SiGnubash,
} from "react-icons/si";
import { TbBrandReactNative, TbDeviceMobileCode } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import type {
  Tab,
  WhyChooseItem,
  Service,
  SkillCategory,
  Project,
  Client,
  ContactOption,
  SocialHandle,
  FooterSection,
} from "./types";

export const tabs: Tab[] = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skill" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
];

export const whyChooseMe: WhyChooseItem[] = [
  {
    title: "Unparalleled Technical Expertise",
    icon: <FaUserCheck />,
    link: "",
  },
  { title: "Data Driven Solutions", icon: <FaChartBar />, link: "" },
  { title: "Dedicated Client Support", icon: <FaHeadset />, link: "" },
  { title: "Innovative Problem Solving", icon: <FaSyncAlt />, link: "" },
  { title: "Dynamic Development Approach", icon: <FaLaptopCode />, link: "" },
  { title: "Cybersecurity Focus", icon: <IoShieldCheckmark />, link: "" },
  { title: "Continuous Learning", icon: <TfiWrite />, link: "" },
  { title: "Collaborative Mindset", icon: <FaHandsHelping />, link: "" },
];

export const services: Service[] = [
  {
    name: "Mobile App Development",
    slug: "mobile-app-development",
    icon: <TbDeviceMobileCode />,
    description: `I develop cross platform mobile applications that provide seamless user experiences across different devices. Leveraging versatile development frameworks, I craft seamless, high-performance applications that deliver an exceptional user experience on both iOS and Android platforms.`,
  },
  {
    name: "Web Development",
    slug: "web-development",
    icon: <FaLaptopCode />,
    description: `From responsive websites to complex web applications, I deliver robust solutions using cutting edge technologies. My full stack expertise ensures end to end development that meets your business needs while providing optimal performance and scalability.`,
  },
  {
    name: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    icon: <IoShieldCheckmark />,
    description: `I implement robust security measures to protect your digital assets from potential threats. My expertise in cybersecurity ensures that your applications and systems are fortified against vulnerabilities, giving you peace of mind in an increasingly digital world.`,
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    icon: <FaPaintBrush />,
    description: `I create intuitive and visually appealing user interfaces that enhance user experience. By combining aesthetics with functionality, I ensure your digital products not only look great but also provide seamless interaction for your users.`,
  },
  {
    name: "Content Creation",
    slug: "content-creation",
    icon: <TfiWrite />,
    description: `I craft compelling digital content that engages your audience and strengthens your brand. Whether it's blog posts, social media content, or technical documentation, I ensure your message is clear, concise, and impactful.`,
  },
  {
    name: "Database Design & Management",
    slug: "database-design-management",
    icon: <FaDatabase />,
    description: `I design and implement efficient, scalable database solutions tailored to your specific needs. From data modeling to query optimization, I ensure your data is structured for optimal performance and easy maintenance.`,
  },
  {
    name: "API Development",
    slug: "api-development",
    icon: <FaServer />,
    description: `I create robust, well documented APIs that power seamless communication between different software systems. Whether RESTful or GraphQL, my APIs are designed for efficiency, scalability, and ease of integration.`,
  },
  {
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    icon: <FaCloud />,
    description: `I leverage cloud technologies to build scalable, resilient applications. From serverless architectures to containerized deployments, I help you harness the full potential of cloud platforms like AWS, Azure, or Google Cloud.`,
  },
  {
    name: "AI and Machine Learning Integration",
    slug: "ai-machine-learning-integration",
    icon: <BsRobot />,
    description: `I integrate AI and machine learning capabilities into applications, leveraging these technologies to create intelligent, data-driven solutions that can adapt and improve over time.`,
  },
];
export const skills: SkillCategory[] = [
  {
    title: "App Development",
    data: [
      { skill: "Flutter", level: "Experienced" },
      { skill: "React Native", level: "Experienced" },
      { skill: "iOS (Swift)", level: "Experienced" },
      { skill: "Android (Kotlin)", level: "Experienced" },
      { skill: "Xcode", level: "Experienced" },
      { skill: "Android Studio", level: "Experienced" },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Experienced" },
      { skill: "JavaScript", level: "Experienced" },
      { skill: "TypeScript", level: "Experienced" },
      { skill: "Tailwind", level: "Experienced" },
      { skill: "React", level: "Experienced" },
      { skill: "Bootstrap", level: "Intermediate" },
      { skill: "Vue.js", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    data: [
      { skill: "Node.js", level: "Experienced" },
      { skill: "Express.js", level: "Experienced" },
      { skill: "MongoDB", level: "Experienced" },
      { skill: "Python", level: "Experienced" },
      { skill: "MySQL", level: "Experienced" },
      { skill: "PostgreSQL", level: "Intermediate" },
      { skill: "PHP", level: "Intermediate" },
    ],
  },
  {
    title: "Cybersecurity",
    data: [
      { skill: "Network Security", level: "Experienced" },
      { skill: "Penetration Testing", level: "Experienced" },
      { skill: "Security Auditing", level: "Experienced" },
      { skill: "Digital Forensics", level: "Experienced" },
      { skill: "Threat Modeling", level: "Intermediate" },
      { skill: "Incident Response", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud & DevOps",
    data: [
      { skill: "AWS", level: "Intermediate" },
      { skill: "Docker", level: "Intermediate" },
      { skill: "Kubernetes", level: "Basic" },
      { skill: "CI/CD Pipelines", level: "Intermediate" },
      { skill: "Azure", level: "Basic" },
      { skill: "Google Cloud Platform", level: "Intermediate" },
    ],
  },
  {
    title: "Database Management",
    data: [
      { skill: "SQL", level: "Experienced" },
      { skill: "MongoDB", level: "Experienced" },
      { skill: "Redis", level: "Basic" },
      { skill: "Database Optimization", level: "Intermediate" },
      { skill: "Data Modeling", level: "Intermediate" },
    ],
  },
  {
    title: "API Development",
    data: [
      { skill: "RESTful APIs", level: "Experienced" },
      { skill: "GraphQL", level: "Intermediate" },
      { skill: "Swagger", level: "Experienced" },
      { skill: "OpenAPI", level: "Intermediate" },
      { skill: "API Security", level: "Experienced" },
      { skill: "Postman", level: "Experienced" },
    ],
  },
  {
    title: "UI/UX",
    data: [
      { skill: "Figma", level: "Experienced" },
      { skill: "Sketch", level: "Intermediate" },
      { skill: "Adobe XD", level: "Intermediate" },
      { skill: "InVision", level: "Intermediate" },
    ],
  },
  {
    title: "Emerging Technologies",
    data: [
      { skill: "Machine Learning", level: "Intermediate" },
      { skill: "IoT Development", level: "Intermediate" },
      { skill: "Serverless Architecture", level: "Intermediate" },
      { skill: "Progressive Web Apps", level: "Experienced" },
    ],
  },
];
export const projects: Project[] = [
  {
    id: 1,
    title: "Zenode - Web3 Developer Platform",
    image:
      "https://github.com/Jossyboydgenius/Zenode/blob/main/public/active-challenges.png?raw=true",
    category: "Web",
    description: `Level up your coding journey with Zenode - where Web3 contributions become fun and rewarding. Our gamified platform transforms open-source development into an exciting adventure with XP points, daily streaks, and loot boxes. Join 10,000+ active developers, contribute to 50,000+ pull requests, and earn onchain credentials while mastering Solidity and Rust. Track your progress, compete on global leaderboards, and land your dream Web3 job 4x faster.`,
    demoLink: "https://zenode.netlify.app/",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs />, iconColor: "black" },
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "blue" },
      { name: "Tailwind", icon: <SiTailwindcss />, iconColor: "lightblue" },
    ],
  },
  {
    id: 2,
    title: "Fizzi - 3D E-commerce",
    image:
      "https://github.com/user-attachments/assets/d8285ccb-737f-4f49-b85a-b3c32c111166",
    category: "Web",
    description: `Experience the future of beverage shopping with Fizzi's immersive 3D e-commerce platform. Discover gut-friendly sodas perfected with real fruit juice, prebiotics, and probiotics. Featuring stunning 3D product visualization powered by GSAP animations, explore five delicious flavors with just 3-5g sugar and 9g fiber. Our innovative interface makes shopping for healthier alternatives an engaging and interactive experience.`,
    demoLink: "https://fizzii.vercel.app/",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs />, iconColor: "black" },
      { name: "GSAP", icon: <SiJavascript />, iconColor: "green" },
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "blue" },
    ],
  },
  {
    id: 3,
    title: "Seamless Project Management",
    image: seamless,
    category: "Web",
    description: `Take control of your projects with Seamless - the ultimate project management solution. From real-time communication to financial transparency, we've revolutionized project oversight. Features include centralized management, seamless communication, and comprehensive financial tracking. Dream it, build it, and make it happen effortlessly with Seamless.`,
    demoLink: "https://buildwithseamless.co/",
    stack: [
      { name: "ReactJs", icon: <FaReact />, iconColor: "skyblue" },
      { name: "Figma", icon: <FaFigma />, iconColor: "orangered" },
    ],
  },
  {
    id: 4,
    title: "Global Relocate",
    image: globalRelocate,
    category: "Web",
    description: `Your AI-powered platform for seamless relocation, legal guidance, and global living. Compare countries side by side, analyzing key factors like cost of living, tax rates, and quality of life. Leverage smart AI-powered insights and connect with like-minded global nomads through forums and groups. Making international relocation decisions has never been easier.`,
    demoLink: "https://globalrelocatetest.netlify.app/",
    stack: [
      { name: "Vite", icon: <SiJavascript />, iconColor: "yellow" },
      { name: "Figma", icon: <FaFigma />, iconColor: "orangered" },
      { name: "ExpressJs", icon: <SiExpress /> },
    ],
  },
  {
    id: 5,
    title: "Blog website",
    image: blogWebsite,
    category: "Web",
    description: `Dive into the world of innovation with TechInsight Blog. Our platform offers in-depth articles on startups, cutting-edge technology, AI advancements, app development, and cybersecurity. Stay informed and ahead of the curve in the rapidly evolving tech landscape.`,
    demoLink: "https://github.com/Jossyboydgenius/Blog-website",
    stack: [
      { name: "React", icon: <FaReact />, iconColor: "skyblue" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, iconColor: "lightblue" },
      { name: "NodeJs", icon: <FaNodeJs />, iconColor: "green" },
      { name: "MySQL", icon: <SiCss3 />, iconColor: "orange" },
    ],
  },
  {
    id: 6,
    title: "3D Animation Portfolio",
    image: animationPortfolio,
    category: "Web",
    description: `Experience the future of web design with this immersive 3D animation portfolio. Showcasing cutting-edge techniques and creative prowess, this website pushes the boundaries of what's possible in web-based 3D animations.`,
    demoLink: "https://awejosepholaitan.vercel.app/",
    stack: [
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "blue" },
      { name: "JavaScript", icon: <SiJavascript />, iconColor: "yellow" },
      { name: "Tailwind", icon: <SiTailwindcss />, iconColor: "lightblue" },
      { name: "Next.js", icon: <SiNextdotjs />, iconColor: "black" },
      { name: "Prismic", icon: <SiPrismic />, iconColor: "purple" },
    ],
  },
  {
    id: 7,
    title: "Interactive Terminal Website",
    image: interactiveTerminal,
    category: "Web",
    description: `Step into the world of command-line interfaces with this unique terminal-themed website. Navigate through content using familiar terminal commands, offering a nostalgic yet innovative user experience for tech enthusiasts.`,
    demoLink: "https://techapostleterminal.vercel.app/",
    stack: [
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "blue" },
      { name: "JavaScript", icon: <SiJavascript />, iconColor: "yellow" },
      { name: "CSS", icon: <SiCss3 />, iconColor: "lightblue" },
      { name: "HTML", icon: <SiHtml5 />, iconColor: "orange" },
      { name: "Svelte", icon: <SiSvelte />, iconColor: "red" },
    ],
  },
  {
    id: 8,
    title: "Terminal Portfolio Showcase",
    image: terminalPortfolio,
    category: "Web",
    description: `Discover a unique approach to personal branding with this terminal-themed portfolio website. Presenting professional accomplishments and skills through a command-line interface, it offers an engaging and memorable user experience for fellow developers and tech recruiters.`,
    demoLink: "https://aj-terminalportfolio.vercel.app/",
    stack: [
      { name: "TypeScript", icon: <SiTypescript />, iconColor: "blue" },
      { name: "JavaScript", icon: <SiJavascript />, iconColor: "yellow" },
      { name: "CSS", icon: <SiCss3 />, iconColor: "lightblue" },
      { name: "Shell", icon: <SiGnubash />, iconColor: "black" },
    ],
  },
  {
    id: 9,
    title: "Dynamic Terminal Portfolio",
    image: dynamicTerminal,
    category: "Web",
    description: `Experience a blend of nostalgia and innovation with this animated terminal-themed portfolio website. Featuring dynamic animations and interactive elements, this project showcases technical skills and creativity in a unique, engaging format.`,
    demoLink: "https://awejosephterminal.vercel.app/",
    stack: [
      { name: "JavaScript", icon: <SiJavascript />, iconColor: "yellow" },
      { name: "CSS", icon: <SiCss3 />, iconColor: "blue" },
      { name: "HTML", icon: <SiHtml5 />, iconColor: "orange" },
    ],
  },
  {
    id: 10,
    title: "AI Powered School",
    image:
      "https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png",
    category: "UI/UX",
    description: `Imagine a learning platform where AI becomes your personal tutor. Our School UI Design revolutionizes education, offering an intuitive interface that adapts to each student's unique learning style. Smart features like personalized study plans and real time progress tracking make learning engaging and efficient. Step into the future of education where technology and pedagogy blend seamlessly.`,
    demoLink: "https://github.com/Jossyboydgenius/Wisdom-Wizard-GPT.git",
    stack: [{ name: "XD", icon: <SiAdobexd />, iconColor: "skyblue" }],
  },
  {
    id: 11,
    title: "Robotic Engineering Web Application",
    image:
      "https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png",
    category: "Web",
    description: `Step into the world of tomorrow with our Robotic Engineering Web Application. This platform is where imagination meets innovation, allowing engineers to design, simulate, and optimize robotic systems with unprecedented ease. From drag and drop component assembly to real time 3D visualization, we're not just building robots, we're crafting the future of automation.`,
    demoLink: "https://wakatime.com/@TechApostle",
    stack: [
      { name: "ReactJs", icon: <FaReact />, iconColor: "skyblue" },
      { name: "NodeJs", icon: <FaNodeJs />, iconColor: "green" },
      { name: "ExpressJs", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb />, iconColor: "limegreen" },
    ],
  },
  {
    id: 12,
    title: "Project Management application",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png",
    category: "Apps",
    description: `Say goodbye to chaotic project management and hello to streamlined success. Our intuitive Project Management application turns complex workflows into a breeze. With real time collaboration, customizable dashboards, and intelligent task prioritization, your team's productivity will soar to new heights. It's not just about managing projects, it's about empowering teams to achieve greatness.`,
    demoLink: "https://github.com/Jossyboydgenius/Blog-App.git",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      { name: "NodeJs", icon: <FaNodeJs />, iconColor: "green" },
      { name: "ExpressJs", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb />, iconColor: "limegreen" },
    ],
  },
  {
    id: 13,
    title: "Mobile bank - App Design",
    image:
      "https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png",
    category: "UI/UX",
    description: `Banking reimagined for the digital age. Our Mobile Bank app design puts financial power at your fingertips with a sleek, intuitive interface. From seamless transactions to personalized financial insights, every tap brings you closer to your financial goals. It's not just a banking app, it's your personal financial companion, available 24/7.`,
    demoLink: "https://awejosepholaitan.vercel.app/",
    stack: [{ name: "Figma", icon: <FaFigma />, iconColor: "orangered" }],
  },
  {
    id: 14,
    title: "Quiz App Development",
    image:
      "https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    category: "Apps",
    description: `Learning meets excitement in our innovative Quiz App. Designed to make knowledge acquisition addictive, this app turns every question into an opportunity for growth. With adaptive difficulty levels, multimedia content, and social learning features, it transforms the way people engage with information. Get ready to quiz, learn, and grow, all at the tap of a screen.`,
    demoLink: "https://wakatime.com/@TechApostle",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      { name: "NodeJs", icon: <FaNodeJs />, iconColor: "green" },
      { name: "ExpressJs", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb />, iconColor: "limegreen" },
    ],
  },
];
export const clients: Client[] = [
  {
    image: client1,
    name: "Alex Thompson",
    position: "CTO of TechInnovate",
    review: `Working with Awe Joseph was a game changer for our startup. His technical expertise and innovative approach transformed our ideas into a robust, scalable platform. What impressed me most was his ability to anticipate potential security issues and address them proactively. A true professional who delivers beyond expectations!`,
  },
  {
    image: client2,
    name: "Sarah Chen",
    position: "Product Manager at GlobalSoft",
    review: `I can't speak highly enough of Awe Joseph's work. He took our outdated website and turned it into a modern, user friendly interface that has significantly improved our customer engagement. His attention to detail and commitment to delivering a secure, high performance solution was evident throughout the project.`,
  },
  {
    image: client3,
    name: "Michael Okonkwo",
    position: "Founder of AfriTech Solutions",
    review: `Awe Joseph's expertise in both frontend and backend development was crucial in building our complex web application. He navigated challenging technical requirements with ease and always kept us informed about the progress. His cybersecurity insights added an extra layer of value to the project. Highly recommended!`,
  },
  {
    image: client4,
    name: "Emily Rodriguez",
    position: "COO of MobileFirst Inc.",
    review: `We hired Awe Joseph to develop a mobile app for our business, and the results exceeded our expectations. His proficiency in Flutter delivered a smooth, responsive app that our users love. Moreover, his proactive approach to security gave us confidence in the integrity of our product.`,
  },
  {
    image: client5,
    name: "David Nwosu",
    position: "IT Director at AfriBank",
    review: `Awe Joseph's technical skills are matched only by his excellent communication and project management abilities. He took the time to understand our business needs and delivered a solution that not only met but exceeded our requirements. His cybersecurity expertise was an added bonus that ensured our peace of mind.`,
  },
];

export const contactOptions: ContactOption[] = [
  {
    title: "Email",
    value: "awejosepholaitan@gmail.com",
    icon: <MdEmail />,
  },
  {
    title: "Phone Number",
    value: "+2349034018552",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Address",
    value: "Lagos, Nigeria",
    icon: <FaMapMarkerAlt />,
  },
];

export const socialHandles: SocialHandle[] = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/awejosepholaitan",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/tech_apostle/",
  },
  {
    name: "Wakatime",
    icon: <SiWakatime />,
    link: "https://wakatime.com/@TechApostle",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/Jossyboydgenius",
  },
];

export const footer: FooterSection[] = [
  {
    title: "Explore",
    routes: [
      { name: "About Me", id: "about" },
      { name: "Skills", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
    ],
  },
  {
    title: "Others",
    routes: [
      { name: "Privacy Policy", route: "/privacy-policy" },
      { name: "Terms and Conditions", route: "/terms-and-conditions" },
      { name: "Cookie Policy", route: "/cookie-policy" },
    ],
  },
];
