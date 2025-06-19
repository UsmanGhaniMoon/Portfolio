const navLinks = [
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
    title: "PHP Laravel Developer",
    icon: "/assets/web.png",
  },
  {
    title: "Vue.js Developer",
    icon: "/assets/frontend.png",
  },
  {
    title: "Backend Developer",
    icon: "/assets/backend.png",
  },
  {
    title: "MERN Stack Developer",
    icon: "/assets/mern.png",
    icon: "/assets/fullStack.png",
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "Express JS",
    icon: "/assets/tech/expressjs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "Mongoose",
    icon: "/assets/tech/mongoose.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Vue.js",
    icon: "/assets/tech/vuejs.png",
  },
  {
    name: "Laravel",
    icon: "/assets/tech/laravel.png",
  },
  {
    name: "CodeIgniter",
    icon: "/assets/tech/codeIgniter.png",
  },

  {
    name: "WordPress",
    icon: "/assets/tech/wordPress.png",
  },
  {
    name: "MySQL",
    icon: "/assets/tech/mysql.png",
  },
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "jQuery",
    icon: "/assets/tech/jQuery.png",
  },
  {
    name: "Git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "GitHub",
    icon: "/assets/github.png",
  },
];

const tools = [
  {
    name: "VS Code",
    icon: "/assets/tools/vscode.png",
  },
  {
    name: "ChatGPT",
    icon: "/assets/tools/ChatGPT.png",
  },
  {
    name: "Chrome",
    icon: "/assets/tools/chrome.png",
  },
  {
    name: "DBeaver",
    icon: "/assets/tools/DBeaver.png",
  },
  {
    name: "Mongodb Compass",
    icon: "/assets/tools/mongodbCompass.png",
  },
  {
    name: "Postman",
    icon: "/assets/tools/postman.png",
  },
  {
    name: "Ubuntu",
    icon: "/assets/tools/ubuntu.png",
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "TeamsWork - Remote",
    icon: "/assets/fullStack.png",
    iconBg: "#FF2D20",
    date: "Jun 2022 - Apr 2025",
    points: [
      "Developed 100+ REST APIs using Laravel and integrated them into Vue.js SPA, improving performance by 30%.",
      "Led frontend team to implement JWT authentication, reducing security incidents by 40%.",
      "Integrated Twilio for voice calling and Stripe for payment processing.",
      "Worked on GitHub private repository for web application development.",
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "Traxim Technologies, Lahore",
    icon: "/assets/laravel.png",
    iconBg: "#FF2D20",
    date: "Feb 2019 - Jun 2022",
    points: [
      "Built and maintained hospital management systems in Laravel, increasing patient booking efficiency by 40%.",
      "Implemented admin dashboards with real-time reporting and scheduling features.",
      "Collaborated with frontend team on Vue.js integrations for seamless user experiences.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Creative Rays, Lahore",
    icon: "/assets/codeIgniter.png",
    iconBg: "#EE4323",
    date: "Jul 2017 - Jan 2019",
    points: [
      "Designed and deployed CRM systems in CodeIgniter, improving client communication workflows.",
      "Worked with technologies including PHP, WordPress, jQuery, AJAX, HTML5, and MySQL.",
      "Developed custom solutions to enhance business processes and user interactions.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LEADCONCEPT LTD, Lahore",
    icon: "/assets/wordPress.png",
    iconBg: "#21759B",
    date: "Jan 2016 - Jul 2017",
    points: [
      "Developed dynamic CMS and client portals using CodeIgniter and WordPress.",
      "Implemented user dashboards and third-party login modules for enhanced functionality.",
      "Created custom solutions to meet client requirements and improve user engagement.",
    ],
  },
  {
    title: "Technical Skills",
    company_name: "Full Stack Expertise",
    icon: "/assets/cloud.png", 
    iconBg: "#383E56",
    date: "2016 - Present",
    points: [
      "Backend: Laravel, Node.js, Express, CodeIgniter, PHP, REST APIs",
      "Frontend: Vue.js, React, JavaScript, jQuery, HTML5, CSS3",
      "Databases: MySQL, MongoDB",
      "Tools: Git, Docker, WordPress, Bitrix24",
      "Third-Party: Twilio, Stripe, Easyship",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "The web application delivered exceeded our expectations in both design and functionality. Truly impressive work!",
    name: "Alex Johnson",
    designation: "Product Manager",
    company: "TechNova Solutions",
    image: "/assets/testimonials/5.jpg",
  },
  {
    testimonial:
      "Working with this developer was a game-changer for our business. Their attention to detail is remarkable.",
    name: "Samira Khan",
    designation: "Operations Director",
    company: "Global Ventures Inc.",
    image: "/assets/testimonials/4.jpg",
  },
  {
  testimonial:
    "Our platform's performance improved dramatically after the optimization work. Highly recommended!",
   name: "Priya Sharma",
   designation: "Technical Lead",
   company: "Digital Horizon LLC",
   image: "/assets/testimonials/6.jpg",
  }
];


const projects = [
  {
    name: "JotPhone (VoIP System)",
    description:
      "A web-based VoIP system enabling users to purchase and use US phone numbers internationally. Integrated Twilio for voice calling and Stripe for payment processing.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js3",
        color: "green-text-gradient",
      },
      {
        name: "Twilio/Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/jetphone.png",
    alt: "JetPhone VoIP System",
    source_code_link: "https://github.com/UsmanGhaniMoon",
    live_link: "https://beta.jotphone.com",
  },
  {
    name: "West Capital Lending",
    description:
      "A loan management system featuring secure login, 2FA, and user dashboards. Built with Laravel 8 for streamlined financial operations.",
    tags: [
      {
        name: "Laravel 8",
        color: "blue-text-gradient",
      },
      {
        name: "2FA",
        color: "green-text-gradient",
      },
      {
        name: "Admin Dashboards",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/west-capital.png",
    alt: "West Capital Lending",
    source_code_link: "https://github.com/UsmanGhaniMoon",
    live_link: "https://portal.westcaplending.com",
  },
  {
    name: "Global Lien Doctors",
    description:
      "A private hospital website where patients can book appointments with doctors. Developed using Laravel 6 with a focus on usability and efficiency.",
    tags: [
      {
        name: "Laravel 6",
        color: "blue-text-gradient",
      },
      {
        name: "Healthcare",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/global-lien.png", 
    alt: "Global Lien Doctors",
    source_code_link: "https://github.com/UsmanGhaniMoon",
    live_link: "https://globalcloudportal.com",
  },
  {
    name: "Artist Auditions",
    description:
      "A talent audition platform for artists to register and apply for events. Built with Laravel to showcase and manage artist profiles.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Talent Platform",
        color: "green-text-gradient",
      },
      {
        name: "Event Manag",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/artist-auditions.png", 
    alt: "Artist Auditions",
    source_code_link: "https://github.com/UsmanGhaniMoon",
    live_link: "https://artistauditions.com",
  },
  {
    name: "SafeWatch (UK)",
    description:
      "UK's premier service marketplace connecting clients with verified professionals (carpenters, electricians, IT experts). Built with Laravel 6, featuring service listings, booking system.",
    tags: [
      {
        name: "Laravel 6",
        color: "blue-text-gradient",
      },
      {
        name: "Service Marketplace",
        color: "green-text-gradient",
      },
      {
        name: "User Ratings",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/safewatch.png", 
    alt: "UK Service Marketplace Platform",
    source_code_link: "https://github.com/UsmanGhaniMoon",
    live_link: "https://safewatch.co.uk",
  },
  {
    name: "My Portfolio",
    description:
      "A modern, interactive portfolio showcasing my full-stack projects. Built with React.js, Tailwind CSS expertise. Features responsive design and project filtering for seamless navigation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/portfolio.png",
    alt: "Portfolio",
    source_code_link: "https://github.com/UsmanGhaniMoon/portfolio",
    live_link: "https://usman-portfolio-web.vercel.app/",
  },

];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
