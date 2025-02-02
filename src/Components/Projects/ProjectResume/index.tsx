import { Stack, Text } from "@mantine/core";

export default function ProjectResume() {
  return (
    <Stack>
      <Text
        ta={{ base: "center", sm: "start" }}
        fz={{ base: 30, md: 35, lg: 45 }}
        c="azulEscuro.5"
        mb={20}
      >
        Projetos
      </Text>

      <Text
        fz={{ base: 13, xs: 13, sm: 18, md: 23 }}
        c="azulClaro"
        ta={{ base: "center", sm: "start" }}
        fw={500}
      >
        Meus projetos utilizam uma ampla variedade de ferramentas tecnológicas
        de ponta. Minha melhor experiência está em criar websites com foco em
        front-end, utilizando a biblioteca de estilo Mantine e React para
        desenvolvimento de interfaces dinâmicas e modernas. Porém, também
        consigo me dedicar ao back-end quando necessário, para isso uso o
        Node.js para me acompanhar no desenvolvimento.
      </Text>
    </Stack>
  );
}
