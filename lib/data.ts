import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import wajLogo from "@/public/waj_logo.webp";
import wajAppImg from "@/public/waj_app.webp";
import roadRideImg from "@/public/roadride.jpeg";
import aboAppImg from "@/public/abo_app.jpeg";
import waselAppImg from "@/public/wasel_app.jpeg";
import rocketyImg from "@/public/rocket_simultation_app.png";
import chamBank from "@/public/cham-bank.webp";
import softLogo from "@/public/90soft.webp";
import shamUni from "@/public/sham-uni.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer | Full Stack Developer",
    location: "WAJ UAE (Management System) - Dubai, UAE",
    description:
      "Spearheaded development of a customer booking platform that significantly increased user engagement. Migrated infrastructure to cloud-based solution, reducing server costs by 55% and boosting system reliability. Implemented deployment automation for faster release cycles and optimized app speed by 60%, dramatically improving user experience and retention.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - June 2025",
    logo: wajLogo // You'll need to add this image
  },
  {
    title: "Data Scientist",
    location: "AL-Cham Bank (Banking System) - Dubai, UAE",
    description:
      "Led a team of 5 developers in adopting data-driven development practices, utilizing analytics dashboards to track velocity and increase efficiency by 30%. Oversaw the integration of 15+ new features by leveraging A/B testing and user behavior analysis to validate hypotheses, ensuring data integrity for financial reporting and directly driving higher user engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - January 2024",
    logo: chamBank // You'll need to add this image
  },
  {
    title: "Software Engineer | Full Stack Developer",
    location: "90 SOFT (Software Development) - Dubai, UAE",
    description:
      "Designed robust Entity-Relationship Diagrams (ERD) and database schemas that reduced data retrieval times by 50% and improved overall performance by 30%. Successfully delivered 5 major enterprise projects on time and within budget, while mentoring junior developers to enhance code quality and team productivity.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - September 2023",
    logo: softLogo // You'll need to add this image
  },
  {
    title: "Robotics Instructor",
    location: "Al Sham University - Syria",
    description:
      "Designed and implemented comprehensive robotics curricula that resulted in a 15% increase in student enrollment. Facilitated collaborative projects that inspired students to pursue advanced studies in engineering and fostered the next generation of technical talent.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - March 2022",
    logo: shamUni // You'll need to add this image
  },
] as const;

export const projectsData = [
  {
    title: "WAJ - All-in-One Salon Management System",
    description:
      "Comprehensive salon and beauty business management platform with customer booking, staff scheduling, inventory management, and payment processing. Spearheaded development of the booking platform, migrated infrastructure to cloud reducing costs by 55%, and optimized app speed by 60%. Available on web, iOS, and Android.",
    tags: ["Node.js", "NestJS", "Flutter", "PostgreSQL", "TypeScript", "Docker", "Prisma", "Supabase"],
    icons: [
      "logos:nodejs-icon",
      "logos:nestjs",
      "logos:flutter",
      "logos:postgresql",
      "logos:typescript-icon",
      "logos:docker-icon",
      "logos:prisma",
      "logos:supabase-icon",
    ],
    imageUrl: wajAppImg,
    demoLink: "https://waj.ai/en",
    appStoreLink: "https://apps.apple.com/ae/app/waj-all-in-one-salon-manager/id6471232991",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.wajapp.waj&hl=en_GB",
  },
  {
    title: "Road Ride - Cycling Social Platform",
    description:
      "Professional cycling platform with 30K+ active users combining fitness tracking, social features, and marketplace. Users can track calories and distance, join group rides, browse cycling news, buy/sell bikes, compete on leaderboards, and earn badges. Built with zero downtime architecture that has served the community for 3+ years with no critical issues.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "REST APIs", "Firebase", "Google Maps API", "MongoDB", "Parse Server"],
    icons: [
      "logos:flutter",
      "logos:nodejs-icon",
      "logos:postgresql",
      "logos:firebase",
      "devicon:googlecloud",
      "logos:mongodb-icon",
      "simple-icons:parse",
    ],
    imageUrl: roadRideImg,
    appStoreLink: "https://apps.apple.com/hr/app/road-ride-team/id6444900415",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.soft.road_ride&hl=en_GB",
  },
  {
    title: "ABO Store - E-Commerce Platform",
    description:
      "Comprehensive e-commerce platform serving 30K+ active users in the Iraqi market, specializing in home furnishings, apparel, and lifestyle products. Features include product browsing with variant selection, inventory management, wish lists, personalized recommendations, and seamless shopping experience. Available on web, iOS, and Android platforms.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "REST APIs", "Firebase", "React", "FCM"],
    icons: [
      "logos:flutter",
      "logos:nodejs-icon",
      "logos:postgresql",
      "logos:firebase",
      "logos:react",
      "simple-icons:firebasecloudmessaging",
    ],
    imageUrl: aboAppImg,
    demoLink: "https://abostoreiq.com/",
    appStoreLink: "https://apps.apple.com/hr/app/abo-store/id6444841672",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.soft.ABO&hl=en_GB",
  },
  {
    title: "Klshi Wasel - Delivery & Logistics Platform",
    description:
      "Multi-purpose delivery platform serving 7K+ active users, combining e-commerce fulfillment with general logistics services. Users can purchase products from partner stores and arrange pickup/delivery, or request item transportation services between locations. Features real-time tracking, flexible scheduling, and comprehensive order management for seamless delivery experiences.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "Firebase", "Google Maps API"],
    icons: [
      "logos:flutter",
      "logos:nodejs-icon",
      "logos:postgresql",
      "logos:firebase",
      "logos:google-maps",
    ],
    imageUrl: waselAppImg,
    appStoreLink: "https://apps.apple.com/hr/app/klshi-wasel-%D9%88%D8%A7%D8%B5%D9%84/id6736594065",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.ixcoders.wasel&hl=en_GB",
  },
  {
    title: "Rockety - 3D Rocket Physics Simulator",
    description:
      "Interactive 3D rocket simulation demonstrating realistic physics principles through an engaging web experience. Features adjustable thrust and launch angle controls, real-time physics calculations, detailed 3D rocket model with textures and lighting, and educational content explaining rocket flight mechanics. Built with Three.js for immersive 3D graphics and accurate aerodynamic modeling.",
    tags: ["TypeScript", "Three.js", "HTML", "CSS", "Physics Engine"],
    icons: [
      "logos:typescript-icon",
      "logos:threejs",
      "logos:html-5",
      "logos:css-3",
    ],
    imageUrl: rocketyImg,
    urlLink: "https://rockety.ianshade.com/",
    githubLink: "https://github.com/ian-shade/Rockety",
  },
] as const;

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Dart", icon: "logos:dart" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "Java", icon: "logos:java" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Python", icon: "logos:python" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Bash Script", icon: "simple-icons:gnubash" },
      { name: "Kotlin", icon: "logos:kotlin-icon" },
      { name: "Swift", icon: "logos:swift" },
    ],
  },
  {
    category: "Cloud & Hosting",
    skills: [
      { name: "Google Cloud", icon: "logos:google-cloud" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Netlify", icon: "logos:netlify-icon" },
      { name: "Heroku", icon: "logos:heroku-icon" },
      { name: "Cloudflare", icon: "logos:cloudflare-icon" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: "logos:django-icon" },
      { name: "Express.js", icon: "simple-icons:express" },
      { name: "FastAPI", icon: "simple-icons:fastapi" },
      { name: "Flutter", icon: "logos:flutter" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Socket.IO", icon: "logos:socket-io" },
      { name: "OpenGL", icon: "simple-icons:opengl" },
      { name: "Three.js", icon: "logos:threejs" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MariaDB", icon: "logos:mariadb-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Microsoft SQL Server", icon: "simple-icons:microsoftsqlserver" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Prisma", icon: "logos:prisma" },
    ],
  },
  {
    category: "Design & Creative",
    skills: [
      { name: "Adobe", icon: "logos:adobe" },
      { name: "Figma", icon: "logos:figma" },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Matplotlib", icon: "logos:matplotlib-icon" },
      { name: "MLflow", icon: "simple-icons:mlflow" },
      { name: "NumPy", icon: "logos:numpy" },
      { name: "Pandas", icon: "simple-icons:pandas" },
      { name: "Plotly", icon: "logos:plotly" },
      { name: "PyTorch", icon: "logos:pytorch-icon" },
      { name: "scikit-learn", icon: "logos:scikit-learn" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Arduino", icon: "logos:arduino" },
      { name: "Jira", icon: "logos:jira" },
    ],
  },
];
