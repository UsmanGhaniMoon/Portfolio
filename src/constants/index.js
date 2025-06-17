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
    name: "Shop",
    description:
      "A web-based platform that allows users to search, and order products. admin can manage products, orders, reviews, and users. Providing a convenient and efficient solution for people who need the best online shopping experience.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Retux",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image:
      "/assets/e-commerce.png",
    alt: "E-Commerce",
    source_code_link: "https://github.com/esh/newShop",
    live_link: "http://3.82.129.40:8000/",
  },
  {
    name: "Pro Connect Up",
    description:
      "A web application that enables users to find people with the same interest in their career, find a person for freelance work, search for job openings, and locate available jobs based on their current location.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "/assets/proConnectup.jpg",
    alt: "Pro Connect Up",

    source_code_link: "https://github.com/UsmanGhaniMoon/Portfolio",
    live_link: "https://github.com/UsmanGhaniMoon/Portfolio",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions. I take pride in developing user-friendly and efficient applications.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image:
      "/assets/portfolio.png",
    alt: "Portfolio",
    source_code_link: "https://github.com/UsmanGhaniMoon/portfolio",
    live_link: "https://usman-ghani-portfolio.web.app/",
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
