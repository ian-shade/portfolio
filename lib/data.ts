import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import wajLogo from "@/public/waj_logo.webp";
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
    title: "Developer Job Matching Portal",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: ozdevsImg,
    githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Crypto Sentiment Analysis",
    description:
      "Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:express",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Company Asset Trading",
    description:
      "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:java", "logos:mariadb-icon"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  {
    title: "Computer Auction",
    description:
      "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/ben04rogers/computer-auction",
  },
  {
    title: "Task Manager Console App",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["C#"],
    icons: ["devicon:csharp"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/ben04rogers/task-manager",
  },
  // {
  //   title: "Family Tree Relationship Path Finder",
  //   description:
  //     "Python program that computes the shortest paths in a family tree using a breadth-first search algorithm. Problem was to calculate the shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  {
    title: "Arduino Binary Game",
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    tags: ["C"],
    icons: ["devicon:c"],
    imageUrl: binaryGameImg,
    githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
    demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
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
