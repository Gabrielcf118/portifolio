import { Stack, Text } from "@mantine/core";

export default function ExperienceResume() {
  return (
    <Stack>
      <Text
        ta={{ base: "center", sm: "start" }}
        fz={{ base: 30, md: 35, lg: 45 }}
        c="azulEscuro.5"
        mb={20}
      >
        Experiência
      </Text>

      <Text
        fz={{ base: 13, xs: 13, sm: 18, md: 23 }}
        c="azulClaro"
        ta={{ base: "center", sm: "start" }}
        fw={500}
      >
        Passei por experiências em empresas e projetos como freelancer, onde
        pude aplicar minhas habilidades para criar soluções eficientes e
        inovadoras. Embora tenha acumulado um bom repertório técnico, estou
        ciente de que o aprendizado é contínuo e vejo cada desafio como uma
        oportunidade de evoluir e me aprimorar ainda mais. Minha determinação é
        crescer junto com os projetos e equipes em que atuo, sempre buscando me
        tornar uma versão melhor de mim mesmo.
      </Text>
    </Stack>
  );
}
