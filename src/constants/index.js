const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Kibe Labs brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/man2.jpg",
    manImage: "Evans Omondi, Software Developer",
    logoPath: "/images/logo1.png",
    title: "Freelance Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Designed and developed backend and full stack systems using Node.js, Express.js, and MongoDB.",
      "Built and integrated RESTful and GraphQL APIs for client applications.",
      "Developed responsive UIs with React.js and integrated them with backend services.",
      "Deployed applications using Docker and GitHub Actions CI/CD pipelines.",
      "Collaborated with remote teams via GitHub, ensuring timely, high-quality deliverables.",
    ],
  },
  {
    review:
      "Kibe Labs' contributions to the company has been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/man1.jpg",
    manImage: "Brandon Kipn'geno, Team Leader",
    logoPath: "/images/logo2.png",
    title: "Network Support",
    date: "May 2024 - August 2024",
    responsibilities: [
      "Provided technical support by analyzing issues and collaborating with IT teams to implement workflow improvements.",
      "Assisted in system troubleshooting, monitoring, and optimization for improved efficiency.",
      "Participated in workshops on system deployments, networking, and infrastructure monitoring.",
      "Gained hands-on exposure to enterprise-level IT operations and system maintenance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "James Mwangi, Software Architect",
    mentions: "@jamesmwangi",
    review:
      "Kibe Labs is a highly skilled backend developer with deep knowledge of Node.js and Express. He has a remarkable ability to design clean and scalable APIs, and his contributions significantly improved the performance and reliability of our applications.",
    imgPath: "/images/jamesmwangi.jpg",
  },
  {
    name: "Grace Wanjiru, Project Manager",
    mentions: "@gracewanjiru",
    review:
      "What stands out about Kibe Labs is his problem-solving mindset. When faced with complex technical challenges, he consistently finds efficient solutions and often proposes innovative approaches that improve both functionality and user experience.",
    imgPath: "/images/gracewanjiru.jpeg",
  },
  {
    name: "Michael Otieno, Team Lead",
    mentions: "@michaelotieno",
    review:
      "Kibe Labs has an excellent work ethic. He always meets deadlines, communicates clearly, and takes full ownership of his projects. His professionalism and consistency make him a reliable developer to work with.",
    imgPath: "/images/michaelotieno.jpg",
  },
  {
    name: "Jane Njeri, UX/UI Designer",
    mentions: "@janenjeri",
    review:
      "Kibe Labs is not only technically strong but also a great collaborator. He works well with designers, frontend developers, and QA teams to ensure seamless integration. His positive attitude makes teamwork enjoyable and productive.",
    imgPath: "/images/janenjeri.jpg",
  },
  {
    name: "Peter Kamau, Entrepreneur & Client",
    mentions: "@peterkamau",
    review:
      "I had the pleasure of working with Kibe Labs on a freelance project. He took time to understand my requirements, built exactly what I needed, and even suggested improvements I hadn’t thought of. His delivery was both timely and top-quality.",
    imgPath: "/images/peterkamau.jpg",
  },
  {
    name: "Dr. Alice Mutua, Lecturer & Mentor",
    mentions: "@alicemutua",
    review:
      "Kibe Labs has an impressive hunger for knowledge. He is always learning new frameworks, tools, and best practices. This adaptability allows him to thrive in fast-changing environments and ensures his solutions remain modern and future-proof.",
    imgPath: "/images/alicemutua.jpg",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const projects = [
  {
    img: "/images/homepage.png",
    name: "Youtube Clone",
    demo: "",
    code: "https://github.com/Dispenser254/React-redux-Youtube-Clone",
    Title: "Youtube Clone",
    description:
      "Replicating the core functionalities of the renowned video-sharing platform, this project demonstrates my proficiency in front-end and back-end development.",
    style: {
      shadow: "shadow-[#B5C0D0]",
      cover: "from-[#B5C0D0]",
      display: "hidden group-hover:flex",
    },
  },
  {
    img: "/images/contact.png",
    name: "Hotel Management System",
    demo: "",
    code: "https://github.com/Dispenser254/Hotel-Management-System",
    Title: "Hotel Management System",
    description:
      "Developed to streamline hotel operations, this system offers comprehensive functionalities for managing reservations, room assignments, guest check-ins, and billing. ",
    style: {
      shadow: "shadow-[#BFEA7C]",
      cover: "from-[#BFEA7C]",
      display: "hidden group-hover:flex",
    },
  },
  {
    img: "/images/homepage.png",
    name: "Real Estate",
    demo: "",
    code: "https://github.com/Dispenser254/Django-Real-Estate",
    Title: "Real Estate System",
    description:
      "Designed to streamline property management and sales processes, this system offers features such as property listings, search filters, and appointment scheduling. ",
    style: {
      shadow: "shadow-[#8E7AB5]",
      cover: "from-[#8E7AB5]",
      display: "hidden group-hover:flex",
    },
  },
  {
    img: "/images/project1.png",
    name: "ToDo App ",
    demo: "",
    code: "https://github.com/Dispenser254/react-todoapp",
    Title: "ToDo App",
    description:
      "Built using React.js, this to-do application provides a simple yet powerful interface for managing tasks.",
    style: {
      shadow: "shadow-[#ECB159]",
      cover: "from-[#ECB159]",
      display: "hidden group-hover:flex",
    },
  },
  {
    img: "/images/project2.png",
    name: "Note App",
    demo: "",
    code: "https://github.com/Dispenser254/Note-App",
    Title: "Note App",
    description:
      "This application simplifies the process of capturing and organizing notes across various devices.",
    style: {
      shadow: "shadow-[#C6DCBA]",
      cover: "from-[#C6DCBA]",
      display: "hidden group-hover:flex",
    },
  },
  {
    img: "/images/project3.png",
    name: "JWT Authentication App ",
    demo: "",
    code: "https://github.com/Dispenser254/JWT-Django-React-Authentication",
    Title: "Authentication App",
    description:
      "Implementing JSON Web Token (JWT) authentication, this application ensures secure access to protected resources through token-based authentication.",
    style: {
      shadow: "shadow-[#9B4444]",
      cover: "from-[#9B4444]",
      display: "hidden group-hover:flex",
    },
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
