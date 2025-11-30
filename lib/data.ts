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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
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
    title: "Team Lead",
    location: "AL-Cham Bank (Banking System) - Dubai, UAE",
    description:
      "Led a high-performing development team of 10 members, achieving a 30% increase in development efficiency. Managed the complete project lifecycle with emphasis on collaboration and communication, significantly reducing project completion time. Successfully integrated over 15 new features into the mobile application, leading to a 90% increase in user engagement and improved customer satisfaction ratings.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - January 2024",
    logo: chamBank // You'll need to add this image
  },
  {
    title: "Software Engineer | Full Stack Developer",
    location: "90 SOFT (Software Development) - Dubai, UAE",
    description:
      "Successfully delivered five major projects, consistently meeting deadlines and budgets. Designed robust database architectures using ERD, reducing data retrieval times by 50% and improving database performance by 30%. Contributed to code reviews and mentored junior developers to enhance code quality and team productivity.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - September 2023",
    logo: softLogo // You'll need to add this image
  },
  {
    title: "Robotics Instructor",
    location: "Al Sham University - Syria",
    description:
      "Developed and implemented educational programs covering fundamental robotic principles, resulting in a 40% increase in student enrollment and 30% improvement in academic performance. Facilitated collaborative projects that boosted student engagement and project completion rates. Inspired students to pursue advanced studies and careers in robotics.",
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
    tags: ["Node.js", "NestJS", "Flutter", "PostgreSQL", "TypeScript", "Docker", "AWS"],
    icons: [
      "logos:nodejs-icon",
      "logos:nestjs",
      "logos:flutter",
      "logos:postgresql",
      "logos:typescript-icon",
      "logos:docker-icon",
      "logos:aws",
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
    tags: ["Flutter", "Node.js", "PostgreSQL", "REST APIs", "Firebase", "Google Maps API"],
    icons: [
      "logos:flutter",
      "logos:nodejs-icon",
      "logos:postgresql",
      "logos:firebase",
      "devicon:googlecloud",
    ],
    imageUrl: roadRideImg,
    appStoreLink: "https://apps.apple.com/hr/app/road-ride-team/id6444900415",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.soft.road_ride&hl=en_GB",
  },
  {
    title: "ABO Store - E-Commerce Platform",
    description:
      "Comprehensive e-commerce platform serving 30K+ active users in the Iraqi market, specializing in home furnishings, apparel, and lifestyle products. Features include product browsing with variant selection, inventory management, wish lists, personalized recommendations, and seamless shopping experience. Available on web, iOS, and Android platforms.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "REST APIs", "Firebase"],
    icons: [
      "logos:flutter",
      "logos:nodejs-icon",
      "logos:postgresql",
      "logos:firebase",
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
      "devicon:googlecloud",
    ],
    imageUrl: waselAppImg,
    appStoreLink: "https://apps.apple.com/hr/app/klshi-wasel-%D9%88%D8%A7%D8%B5%D9%84/id6736594065",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.ixcoders.wasel&hl=en_GB",
  },
  {
    title: "Rockety - 3D Rocket Physics Simulator",
    description:
      "Interactive 3D rocket simulation demonstrating realistic physics principles through an engaging web experience. Features adjustable thrust and launch angle controls, real-time physics calculations, detailed 3D rocket model with textures and lighting, and educational content explaining rocket flight mechanics. Built with Three.js for immersive 3D graphics and accurate aerodynamic modeling.",
    tags: ["JavaScript", "Three.js", "HTML", "CSS", "Physics Engine"],
    icons: [
      "logos:javascript",
      "logos:threejs",
      "logos:html-5",
      "logos:css-3",
    ],
    imageUrl: rocketyImg,
    urlLink: "https://resonant-tanuki-42ae82.netlify.app/",
    githubLink: "https://github.com/ian-shade/Rockety",
  },
] as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "PHP", icon: "logos:php" },
      { name: "C#", icon: "logos:c-sharp" },
      { name: "Python", icon: "logos:python" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "SQL" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "DynamoDB", icon: "logos:aws-dynamodb" },
      { name: "REST APIs", icon: "material-symbols:api-outline" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Elasticsearch", icon: "logos:elasticsearch" },
      { name: "Logstash", icon: "logos:logstash" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "Single Page Applications" },
      { name: "Responsive Design" }
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "CI/CD" },
      { name: "Infrastructure as Code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design" },
      { name: "Event‑driven architecture" },
      { name: "Agile" },
      { name: "Scrum" },
      { name: "Object Oriented Programming (OOP)" },
      { name: "Test Driven Development (TDD)" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Sentry", icon: "logos:sentry-icon" },
      { name: "New Relic", icon: "logos:new-relic-icon" },
      { name: "Grafana", icon: "logos:grafana" },
    ],
  },
];
