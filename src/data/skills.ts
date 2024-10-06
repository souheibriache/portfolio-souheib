import python from "../assets/skills/python.png";
import java from "../assets/skills/java.png";
import javaScript from "../assets/skills/js.png";
import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/nodejs.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css-3.png";
import jenkins from "../assets/skills/jenkins.png";
import swagger from "../assets/skills/swagger.png";
import tailwind from "../assets/skills/Tailwind CSS.png";
import angular from "../assets/skills/angular.png";
import docker from "../assets/skills/docker.png";
import figma from "../assets/skills/figma.png";
import git from "../assets/skills/git.png";
import graphql from "../assets/skills/graphql.png";
import jira from "../assets/skills/jira.png";
import kubernetes from "../assets/skills/kubernetes.png";
import linux from "../assets/skills/linux.png";
import mongodb from "../assets/skills/mongodb.png";
import mysql from "../assets/skills/mysql.png";
import nestjs from "../assets/skills/nestjs.png";
import nextjs from "../assets/skills/nextjs.png";
import nginx from "../assets/skills/nginx.png";
import postgres from "../assets/skills/postgres.png";
import postman from "../assets/skills/postman.png";
import redis from "../assets/skills/redis.png";
import vscode from "../assets/skills/vscode.png";
const skillsCategories = [
  {
    category: "Langages",
    name: {
      FR: "Langages",
      EN: "Langages",
    },
  },

  {
    category: "Front-end",
    name: {
      FR: "Front-end",
      EN: "Frontend",
    },
  },

  {
    category: "Back-end",
    name: {
      FR: "Back-end",
      EN: "Backend",
    },
  },

  {
    category: "Bases de données",
    name: {
      FR: "Bases de données",
      EN: "Databases",
    },
  },

  {
    category: "Outils",
    name: {
      FR: "Outils",
      EN: "Tools",
    },
  },
];

// Adding a category to each skill manually
const skills: { name: string; icon: string; category: string }[] = [
  // Langages
  {
    name: "Python",
    icon: python,
    category: skillsCategories[0].category,
  },
  {
    name: "Javascript",
    icon: javaScript,
    category: skillsCategories[0].category,
  },
  {
    name: "Typescript",
    icon: typescript,
    category: skillsCategories[0].category,
  },
  {
    name: "Java",
    icon: java,
    category: skillsCategories[0].category,
  },
  // Front-end
  {
    name: "React JS",
    icon: react,
    category: skillsCategories[1].category,
  },
  {
    name: "Angular",
    icon: angular,
    category: skillsCategories[1].category,
  },
  {
    name: "Tailwind",
    icon: tailwind,
    category: skillsCategories[1].category,
  },
  {
    name: "HTML",
    icon: html,
    category: skillsCategories[1].category,
  },
  {
    name: "CSS",
    icon: css,
    category: skillsCategories[1].category,
  },
  // Back-end
  {
    name: "Node JS",
    icon: node,
    category: skillsCategories[2].category,
  },
  {
    name: "NestJs",
    icon: nestjs,
    category: skillsCategories[2].category,
  },
  {
    name: "Next.js",
    icon: nextjs,
    category: skillsCategories[2].category,
  },
  {
    name: "Nginx",
    icon: nginx,
    category: skillsCategories[2].category,
  },
  {
    name: "GraphQl",
    icon: graphql,
    category: skillsCategories[2].category,
  },
  {
    name: "Swagger",
    icon: swagger,
    category: skillsCategories[2].category,
  },
  // Outils
  {
    name: "Docker",
    icon: docker,
    category: skillsCategories[4].category,
  },
  {
    name: "Jenkins",
    icon: jenkins,
    category: skillsCategories[4].category,
  },
  {
    name: "Git",
    icon: git,
    category: skillsCategories[4].category,
  },
  {
    name: "Figma",
    icon: figma,
    category: skillsCategories[4].category,
  },
  {
    name: "Jira",
    icon: jira,
    category: skillsCategories[4].category,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
    category: skillsCategories[4].category,
  },
  {
    name: "Linux",
    icon: linux,
    category: skillsCategories[4].category,
  },
  {
    name: "Postman",
    icon: postman,
    category: skillsCategories[4].category,
  },
  {
    name: "VS Code",
    icon: vscode,
    category: skillsCategories[4].category,
  },
  // Bases de données
  {
    name: "Mongodb",
    icon: mongodb,
    category: skillsCategories[3].category,
  },
  {
    name: "MySQL",
    icon: mysql,
    category: skillsCategories[3].category,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    category: skillsCategories[3].category,
  },
  {
    name: "Redis",
    icon: redis,
    category: skillsCategories[3].category,
  },
];

export { skills, skillsCategories };
