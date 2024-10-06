import wedort from "../assets/projects/wedort.png";
import busybe from "../assets/projects/busybe.png";
import avocado from "../assets/projects/avocado.png";
import food from "../assets/projects/food.png";

import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/nodejs.png";
import githubActions from "../assets/skills/GitHub Actions.png";
import angular from "../assets/skills/angular.png";
import docker from "../assets/skills/docker.png";
import graphql from "../assets/skills/graphql.png";
import kubernetes from "../assets/skills/kubernetes.png";
import linux from "../assets/skills/linux.png";
import mongodb from "../assets/skills/mongodb.png";
import nestjs from "../assets/skills/nestjs.png";
import nextjs from "../assets/skills/nextjs.png";
import nginx from "../assets/skills/nginx.png";
import postgres from "../assets/skills/postgres.png";
import redis from "../assets/skills/redis.png";
const projects: {
  name: string;
  img: string;
  description: { FR: string; EN: string };
  link: string;
  skills?: string[];
}[] = [
  {
    name: "Wedort",
    img: wedort,
    description: {
      FR: "Au sein de Smartinia, j'étais responsable de la conception et du développement des fonctionnalités frontend et backend d'une application similaire à Uber pour les objets lourds (VTC). Gestion en temps réel pour clients, conducteurs, partenaires et personnel, avec création de trois tableaux de bord et deux applications mobiles.",
      EN: "At Smartinia, I was responsible for designing and developing frontend and backend features for an application similar to Uber but for heavy items (VTC). Real-time management for customers, drivers, partners, and staff, with the creation of three dashboards and two mobile apps.",
    },
    link: "https://wedort.com",
    skills: [
      nestjs,
      typescript,
      nextjs,
      nginx,
      githubActions,
      postgres,
      redis,
      docker,
      kubernetes,
    ],
  },
  {
    name: "BusyBe",
    img: busybe,
    description: {
      FR: "J'ai développé une plateforme pour connecter des étudiants freelances avec des offres de jobs. Intégration API avec une application mobile et un tableau de bord pour faciliter l'accès aux opportunités d'emploi pour les étudiants au Royaume-Uni.",
      EN: "I developed a platform to connect freelance students with job opportunities. API integration with a mobile app and a dashboard to facilitate access to job opportunities for students in the UK.",
    },
    link: "https://busybe.co.uk",
    skills: [nestjs, typescript, graphql, react, postgres, docker],
  },
  {
    name: "Avocado Markt",
    img: avocado,
    description: {
      FR: "E-commerce pour un magasin autrichien, avec une gestion des produits et une expérience utilisateur intuitive. J'ai travaillé sur la conception du backend et du frontend pour offrir une solution complète aux clients.",
      EN: "E-commerce for an Austrian store, with product management and an intuitive user experience. I worked on both backend and frontend design to deliver a complete solution to the clients.",
    },
    link: "https://www.avocadomarkt.com/en",
    skills: [nestjs, typescript, graphql, nextjs, linux, postgres, docker],
  },
  {
    name: "Food order App",
    img: food,
    description: {
      FR: "Projet personnel permettant aux utilisateurs de commander en ligne dans les restaurants. Gestion des commandes, des paiements en ligne et de la navigation dans le menu pour améliorer l'expérience client.",
      EN: "Personal project allowing users to order food online from restaurants. Management of orders, online payments, and menu navigation to enhance the customer experience.",
    },
    link: "https://github.com/souheibriache",
    skills: [node, typescript, angular, githubActions, mongodb, docker],
  },
];

export { projects };
