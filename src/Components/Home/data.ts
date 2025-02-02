import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import {
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedinIn,
  FaNode,
  FaPython,
  FaReact,
  FaWhatsapp,
  FaYarn,
} from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { PiFileSql, PiMicrosoftExcelLogo } from "react-icons/pi";
import { SiAxios, SiTypescript, SiVite, SiZod } from "react-icons/si";

export const menuLinks = [
  { link: "/", label: "Home" },
  { link: "/experiencias", label: "Experiência" },
  { link: "/projetos", label: "Projetos" },
  { link: "/contato", label: "Contato" },
];

export const socialData = [
  {
    Icon: FaGithub,
    color: "#000",
    label: "GitHub",
    href: "https://github.com/Gabrielcf118?tab=repositories",
  },
  {
    Icon: FaLinkedinIn,
    color: "#0077B5",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-oliveira-165b80215/",
  },
  {
    Icon: FaInstagram,
    color: "#E4405F",
    label: "Instagram",
    href: "https://www.instagram.com/gabrieljscf?igsh=MXRwYWdjdm1yOG5rMg%3D%3D&utm_source=qr",
  },
  {
    Icon: FaWhatsapp,
    color: "#25D366",
    label: "WhatsApp",
    href: "https://wa.me/5562991123773?text=${encodeURIComponent('Olá, vim pelo seu portifólio!!')}",
  },
  {
    Icon: IoMailOpen,
    color: "#1CD2FF",
    label: "E-mail",
    href: "mailto:gabrieloliveiracf118@gmail.com",
  },
];

export const iconDeveloperData = [
  { Icon: FaReact, label: "React", color: "#4AD5FE" },
  { Icon: SiTypescript, label: "TypeScript", color: "#2E77C4" },
  { Icon: FaYarn, label: "Yarn", color: "#308BAE" },
  { Icon: FaNode, label: "Node.js", color: "#80CD27" },
  { Icon: FaJs, label: "JavaScript", color: "#F6DD1E" },
  { Icon: FaHtml5, label: "HTML5", color: "#E86D49" },
  { Icon: FaCss3, label: "CSS3", color: "#2D5EA3" },
  { Icon: SiVite, label: "Vite", color: "#FCD029" },
  { Icon: SiZod, label: "Zod", color: "#142340" },
  { Icon: SiAxios, label: "Axios", color: "#5D2EEF" },
];
export const iconScienceData = [
  { Icon: FaPython, label: "Python", color: "#027AFA" },
  { Icon: AiFillOpenAI, label: "ChatGPT", color: "#10A57F" },
  { Icon: FaDatabase, label: "Data base", color: "#0268AB" },
  { Icon: PiMicrosoftExcelLogo, label: "Excel", color: "#20A262" },
  { Icon: BiLogoPostgresql, label: "PostGreSQL", color: "#315F91" },
  { Icon: PiFileSql, label: "Sql", color: "#3B4962" },
  { Icon: BsFileBarGraph, label: "Power Bi", color: "#FFA917" },
];
