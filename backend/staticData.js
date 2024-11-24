const intro = [
  {
    welcomeText: "Hello, I'm",
    firstName: "Charrell",
    lastName: "Sherman",
    description:
      "Passion for education and a strong dedication to delivering projects that make a societal impact. Skilled in modern web technologies and frameworks with a focus on enhancing user-centric mobile and web applications. Proven ability to improve code quality, reduce technical debt, and effectively collaborate cross-functionally with product owners, engineers, UX/UI and QA to define, design, and new features.",
    animationSequence: ["Software Engineer", 1000, "Mobile Developer", 1000],
    animationSpeed: 50,
    animationRepeat: "Infinity",
    // devImagSrc:
    badgeCount: 2,
  },
];

const about = [
  {
    personalInformation: {
      // devImagSrc: "/path/to/dev-image.jpg", // Replace with the actual path
      sectionTitle: "About Me",
      subtitle:
        "I enjoy building dynamic applications that bring ideas to life, using modern tools and technologies to create engaging user experiences.",
    },
    qualifications: {
      education: [
        {
          university: "University of California, Davis",
          degree: "BS in Computer Science",
          years: "2021",
        },
      ],
      experience: [
        {
          company: "General Motors",
          role: "Software Engineer",
          years: "May 2022 - Jan 2024",
        },
        {
          company: "Mission Bit",
          role: "Assistant Instructor",
          years: "May 2018 - Aug 2018",
        },
        {
          company: "Sacramento City College",
          role: "Computer Science Tutor",
          years: "Sept 2017 - May 2018",
        },
      ],
    },
    technicalSkills: {
      skills: [
        {
          name: "Languages: JavaScript · TypeScript · HTML · CSS · Python · C++",
        },
        {
          name: "Technologies and Frameworks: React · Node.js · Express.js · Redux · Git · Figma · Django · PostgreSQL · MongoDB",
        },
      ],
      otherSkills: [
        {
          name: "Code Maintenance · Debugging & Research · Agile · Web Development · Unit Testing · Code Review",
        },
      ],
      tools: [
        { imgPath: "/about/vscode.svg" },
        { imgPath: "/about/figma.svg" },
        { imgPath: "/about/notion.svg" },
        { imgPath: "/about/wordpress.svg" },
      ],
    },
  },
];

const project = [
  {
    image: "/work/3.png", // Updated to match 'image' field in projectSchema
    category: "Django",
    name: "DevSearch", // Updated to match 'name' field in projectSchema
    description:
      "Developer collaboration platform that connects developers with unfinished or in progress projects. Implemented an authentication system and RESTful API using Django libraries to manage both frontend and backend",
    github: "https://github.com/Ell-91/devSearch",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "Finanseer",
    description:
      "Created a full-stack web application and dashboard that provides advanced financial insights and predictive analytics, enabling stakeholders to monitor KPIs and make informed decisions.",
    github: "https://github.com/Ell-91/FinanceDashboard",
  },
  {
    image: "/work/2.png",
    category: "React Native",
    name: "ChatApp",
    description:
      "Developed a full-stack mobile messaging application for iOS and Android, replicating core WhatsApp functionalities, with features like real-time messaging, secure authentication, and group chat.",
    github: "https://github.com/Ell-91/ChatApp",
  },
  {
    image: "/work/1.png",
    category: "Full Stack",
    name: "Pen to Print",
    description:
      "Converting handwritten forms to digital text, improving document accessibility and usability for both doctors and patients.",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "My Portfolio Website",
    description:
      "Created my portfolio website to showcase my projects, qualifications, values, and philosophy, with a contact form for easy connection.",
    github: "https://github.com/Ell-91/charrell-sherman-portfolio",
  },
  {
    image: "/work/4.png",
    category: "Django",
    name: "BandFinder",
    description:
      "BandFinder helps you create bands, find members, and book local talent, making it easy to connect musicians on one platform.",
    github: "/",
  },
];

const project_ = [
  {
    image: "/work/3.png",
    category: "Django",
    name: "DevSearch",
    description:
      "Developer collaboration platform connecting developers with unfinished or in-progress projects. Built an authentication system and RESTful API using Django to manage frontend and backend.",
    github: "https://github.com/Ell-91/devSearch",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "Finanseer",
    description:
      "Created a full-stack web application and dashboard that provides advanced financial insights and predictive analytics, enabling stakeholders to monitor KPIs and make informed decisions.",
    github: "https://github.com/Ell-91/FinanceDashboard",
  },
  {
    image: "/work/2.png",
    category: "React Native",
    name: "ChatApp",
    description:
      "Developed a full-stack mobile messaging application for iOS and Android, replicating core WhatsApp functionalities, with features like real-time messaging, secure authentication, and group chat.",
    github: "https://github.com/Ell-91/ChatApp",
  },
  {
    image: "/work/1.png",
    category: "Full Stack",
    name: "Pen to Print",
    description:
      "Converting handwritten forms to digital text, improving document accessibility and usability for both doctors and patients.",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "My Portfolio Website",
    description:
      "Created my portfolio website to showcase my projects, qualifications, values, and philosophy, with a contact form for easy connection.",
    github: "https://github.com/Ell-91/charrell-sherman-portfolio",
  },
  {
    image: "/work/4.png",
    category: "Django",
    name: "BandFinder",
    description:
      "BandFinder helps you create bands, find members, and book local talent, making it easy to connect musicians on one platform.",
    github: "/",
  },
];

const interest = [
  {
    icon: "GanttChartSquare",
    title: "Fullstack Web Development",
    description:
      "I enjoy the versatility of full-stack development, enabling me to work on everything from front-end design to back-end logic and contribute to projects from concept to completion.",
  },
  {
    icon: "Blocks",
    title: "Backend Development",
    description:
      "I see backend development as a complex puzzle of performance and innovation. I'm drawn to it because it lets you build the invisible infrastructure that shapes the backbone of applications and provides smooth, high-quality user experiences",
  },
  {
    icon: "Gem",
    title: "Mobile Development",
    description:
      "Mobile apps are the digital pulse of modern life. It's more than just code—it's a gateway to solving real-world challenges. My passion lies in creating apps that intuitively connect users with powerful digital experiences across iOS and Android platforms.",
  },
];

const value = [
  {
    avatar: "/reviews/avatar-1.png", // Not used in the current component
    name: "Technical Ownership",
    review:
      "Every line of code is a chance to learn and innovate. I approach each project as a learning canvas, taking full ownership from concept to completion and seeing challenges as opportunities for technical growth.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Code Quality & Craftsmanship",
    review:
      "I treat each codebase as a living ecosystem, prioritizing clean, well-structured code that is maintainable and documented. My approach isn't just about solving today's problems but creating flexible foundations that adapt to future challenges.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Continuous Learning",
    review:
      "My technical journey is an endless curiosity-driven expedition. Emerging technologies aren't just tools to me, they're invitations to learn, adapt, and continuously redefine what's possible in software development.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Impact-Driven",
    review:
      "Dedicated to creating solutions that deliver meaningful value by deeply understanding user needs and measuring success through tangible outcomes. I want to ensure that every project I undertake makes a lasting, positive difference.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "User-Centric Approach",
    review:
      "Beyond aesthetics and functionality, the heart of great software lies in delivering an exceptional user experience. I strive to create solutions that are intuitive, engaging, and centered around the needs of the people who use them.",
  },
];

const contact = [
  {
    h1Text: "Let’s Work Together",
    pText:
      "Whether you have a role in mind or just want to explore possibilities",
    email: "shermancharrell@gmail.com",
    address: "Washington DC",
  },
];

const footer = [
  {
    title: "Ready to Add a Passionate Software Engineer to Your Team?",
  },
];
