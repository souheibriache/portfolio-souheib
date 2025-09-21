import wedort from "../assets/projects/wedort.png";
import Joyit from "../assets/projects/joy-it.png";
import LagServices from "../assets/projects/lag-services.png";
import dane from "../assets/projects/dane.png";

import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/nodejs.png";
import githubActions from "../assets/skills/GitHub Actions.png";
import cannsandra from "../assets/skills/cassandra.png";
import keycloak from "../assets/skills/keycloak.svg";
import docker from "../assets/skills/docker.png";
import graphql from "../assets/skills/graphql.png";
import kubernetes from "../assets/skills/kubernetes.png";
import linux from "../assets/skills/linux.png";
import nestjs from "../assets/skills/nestjs.png";
import nextjs from "../assets/skills/nextjs.png";
import nginx from "../assets/skills/nginx.png";
import postgres from "../assets/skills/postgres.png";
import redis from "../assets/skills/redis.png";
import tailwind from "../assets/skills/Tailwind CSS.png";
const projects: {
  name: string;
  img: string;
  description: { FR: string; EN: string };
  link: string;
  skills?: string[];
}[] = [
  {
    name: "DANE Cyber",
    img: dane,
    description: {
      FR: "Développement et optimisation de Dane-cyber, plateforme de supervision des pare-feux réseau, en performant une refonte de l'interface utilisateur et le développement de nouvelles fonctionnalités frontend et backend pour améliorer la sécurité et les performances.",
      EN: "Development and optimization of Dane-cyber, a network firewall supervision platform, performing a user interface redesign and developing new frontend and backend features to enhance security and performance.",
    },
    link: "https://www.dane-cyber.com/",
    skills: [react, nestjs, node, cannsandra, redis, kubernetes, keycloak],
  },
  {
    name: "Joy-it",
    img: Joyit,
    description: {
      FR: "Conception et implémentation d'une application fullstack complète avec interface client, dashboard administrateur et backend, incluant le déploiement sur Kubernetes et pipeline CI/CD. Joy-it permet aux CSE d'entreprises d'organiser et planifier des événements pour leurs collaborateurs en solution clé en main.",
      EN: "Designed and implemented a complete fullstack application with client interface, admin dashboard, and backend, including Kubernetes deployment and CI/CD pipeline. Joy-it enables company CSEs to organize and schedule events for their employees as a turnkey solution.",
    },
    link: "https://joy-it.fr",
    skills: [
      react,
      tailwind,
      typescript,
      nestjs,
      kubernetes,
      docker,
      nginx,
      linux,
    ],
  },
  {
    name: "Lag-service",
    img: LagServices,
    description: {
      FR: "Projet freelance pour un client spécialisé dans l'investissement et l'immobilier. Développement d'une plateforme permettant la gestion de ses propriétés, le traitement des demandes de logement et l'offre de services d'accompagnement personnalisés.",
      EN: "Freelance project for a client specialized in investment and real estate. Development of a platform for managing properties, handling housing requests, and offering personalized support services.",
    },
    link: "https://lag-services.com/",
    skills: [nextjs, react, nestjs, docker, nginx, linux],
  },
  {
    name: "Wedort",
    img: wedort,
    description: {
      FR: "Au sein de Smartinia, j'étais responsable de la conception et du développement des fonctionnalités frontend et backend d'une application VTC pour les objets lourds. Gestion en temps réel pour clients, conducteurs, partenaires et personnel, avec création de trois dashboards.",
      EN: "At Smartinia, I was responsible for designing and developing frontend and backend features for a VTC application for heavy items. Real-time management for customers, drivers, partners, and staff, with the creation of three dashboards.",
    },
    link: "https://wedort.com/",
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
];

export { projects };
