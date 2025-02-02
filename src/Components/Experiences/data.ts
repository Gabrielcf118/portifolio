import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";

interface ExperiencesDataProps {
  id: number;
  text: string;
  date: string;
  icon?: React.ElementType;
}

export const experiencesData: ExperiencesDataProps[] = [
  {
    id: 1,
    text: "Minha primeira experiência profissional foi na Prefeitura de Anápolis foi onde descobri minha paixão por programação. Lá, dei os primeiros passos na área, aprendi a resolver problemas reais e percebi o impacto da tecnologia no dia a dia. Essa vivência despertou meu interesse e foi o ponto de partida para minha carreira.   ",
    date: "2022",
    icon: RiNumber1,
  },
  {
    id: 2,
    text: "Logo Após, Na Funev. Ampliei meu conhecimento ao lidar com infraestrutura, redes de computadores, VPN, atualização de sistemas e servidores. Essa experiência foi essencial para expandir minha visão sobre a tecnologia e consolidar minha base em TI, preparando-me para novos desafios na carreira.",
    date: "2022",
    icon: RiNumber2,
  },
  {
    id: 3,
    text: "Enquanto trabalhava na outra empresa, também atuei como freelancer para a empresa Ergzone, nos Estados Unidos. Nesse período, contribuí para a melhoria de sistemas existentes, adicionando novas funcionalidades e otimizando códigos. Essa experiência ampliou minha visão sobre desenvolvimento e me proporcionou uma compreensão mais ampla do mercado internacional.",
    date: "2023",
    icon: RiNumber3,
  },
  {
    id: 4,
    text: "Após deixar a Funev, decidi seguir como freelancer e fundar minha própria empresa, a Ranxpert. Com o intuito de promover inscrições para eventos esportivos e oferecer um sistema de gerenciamento eficiente para organizadores, a Ranxpert nasceu com a missão de facilitar a experiência tanto para os atletas quanto para os organizadores de eventos. Essa jornada tem sido uma oportunidade incrível de aplicar meus conhecimentos em tecnologia enquanto desenvolvo soluções inovadoras para o mercado esportivo.",
    date: "2024",
    icon: RiNumber4,
  },
  {
    id: 5,
    text: "Atualmente, dedico meu tempo exclusivamente à Ranxpert, onde continuo inovando e aprimorando soluções para o mercado esportivo. Apesar disso, mantenho uma grande disposição e entusiasmo para compartilhar meu conhecimento e colaborar em projetos que possam agregar valor e promover ainda mais impacto por meio da tecnologia.",
    date: "2025",
    icon: RiNumber5,
  },
];
