import { FaBook, FaCode, FaNode } from "react-icons/fa";
import { SiAxios, SiTypescript, SiVite, SiZod } from "react-icons/si";

interface ProjectsDataProps {
  id: number;
  title: string;
  text: string;
  icon?: { icon: React.ElementType; color?: string };
  iconsDev?: { icon: React.ElementType; color?: string; label: string }[];
}

export const projectsData: ProjectsDataProps[] = [
  {
    id: 1,
    icon: { icon: FaCode, color: "#001C55" },
    title: "Ranxpert",
    text: "A plataforma Rankxpert é uma ticketaria desenvolvida com Mantine, Vite, Zustand e Node.js, oferecendo uma experiência eficiente e moderna para a gestão de eventos.",
    iconsDev: [
      { icon: SiTypescript, color: "#2E77C4", label: "TypeScript" },
      { icon: FaNode, color: "#80CD27", label: "Node.js" },
      { icon: SiVite, color: "#FCD029", label: "Vite" },
      { icon: SiZod, color: "#142340", label: "Zod" },
      { icon: SiAxios, color: "#5D2EEF", label: "Axios" },
    ],
  },
  {
    id: 2,
    icon: { icon: FaCode, color: "#001C55" },
    title: "Emissor de cartão CMTT",
    text: "Desenvolvi um sistema completo que gera um cartão em PDF para o usuário com os dados informados, implementando tanto o front-end quanto o back-end. A aplicação foi construída utilizando Material UI, Redux, Axios, Node.js e React Router DOM para navegação.",
  },
  {
    id: 3,
    icon: { icon: FaBook, color: "#001C55" },
    title: "Portifólio",
    text: "Desenvolvi meu portfólio aprimorando meu conhecimento com React Router DOM e Mantine, criando projetos dinâmicos e responsivos que destacam a integração dessas ferramentas para uma experiência de usuário mais fluida e eficiente.",
  },
  {
    id: 4,
    icon: { icon: FaCode, color: "#001C55" },
    title: "Frontend portal SEI!",
    text: "Desenvolvi uma landing page simples utilizando Material UI e React, focando em uma interface intuitiva e responsiva, com o objetivo de fornecer uma experiência de navegação rápida e agradável para os usuários.",
  },
  {
    id: 5,
    icon: { icon: FaBook, color: "#001C55" },
    title: "Automação sistema MV",
    text: "Desenvolvi um robô de automação com Python e BotCity, que se conecta ao sistema MV, realiza o login e automatiza o cadastro de itens, simplificando um fluxo que seria cansativo e demorado para o usuário.",
  },
  {
    id: 6,
    icon: { icon: FaBook, color: "#001C55" },
    title: "Automação sistema EPA",
    text: "Criei um robô de automação utilizando Python e BotCity para um sistema chamado EPA. O robô realiza o login e automatiza o processo de cadastro de usuários, otimizando um fluxo que seria repetitivo e cansativo para o usuário",
  },
];
