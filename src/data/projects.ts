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
  description: string;
  link: string;
  skills?: string[];
}[] = [
  {
    name: "Wedort",
    img: wedort,
    description:
      "Au sein de Smartinia, j'étais responsable de la conception et du développement des fonctionnalités frontend et backend d'une application similaire à Uber pour les objets lourds (VTC). Gestion en temps réel pour clients, conducteurs, partenaires et personnel, avec création de trois tableaux de bord et deux applications mobiles.",
    link: "wedort.com",
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
    description:
      "J'ai développé une plateforme pour connecter des étudiants freelances avec des offres de jobs. Intégration API avec une application mobile et un tableau de bord pour faciliter l'accès aux opportunités d'emploi pour les étudiants au Royaume-Uni.",
    link: "https://busybe.co.uk",
    skills: [nestjs, typescript, graphql, react, postgres, docker],
  },
  {
    name: "Avocado Markt",
    img: avocado,
    description:
      "E-commerce pour un magazin autrichien, avec une gestion des produits et une expérience utilisateur intuitive. J'ai travaillé sur la conception du backend et du frontend pour offrir une solution complète aux clients.",
    link: "https://www.avocadomarkt.com/en",
    skills: [nestjs, typescript, graphql, nextjs, linux, postgres, docker],
  },
  {
    name: "Food order App",
    img: food,
    description:
      "Projet personnel permettant aux utilisateurs de commander en ligne dans les restaurants. Gestion des commandes, des paiements en ligne et de la navigation dans le menu pour améliorer l'expérience client.",
    link: "https://github.com/souheibriache",
    skills: [node, typescript, angular, githubActions, mongodb, docker],
  },
];

export { projects };
