import { ActionIcon, Group, Stack, Text, Title } from "@mantine/core";
import { socialData } from "../data";
import { useScreenLargerThan } from "../../../Layout/useScreenLargerThan";
import { createStyles } from "@mantine/emotion";

export default function Social() {
  const screenSm = useScreenLargerThan("sm");
  const { classes } = useStyles();

  return (
    <Stack gap="md">
      <Title
        ta={{ base: "center", sm: "start" }}
        c="azulEscuro.5"
        fz={{ base: 40, xs: 32, sm: 45, md: 55, lg: 70 }}
        fw={600}
      >
        Gabriel José de Oliveira
      </Title>

      <Text
        fz={{ base: 13, xs: 13, sm: 18, md: 23 }}
        c="azulClaro"
        ta={{ base: "center", sm: "start" }}
        fw={500}
      >
        Sou um desenvolvedor apaixonado por criar soluções inovadoras e
        práticas. Ao longo da minha jornada, venho aprimorando minhas
        habilidades para construir sistemas escaláveis e eficientes, sempre
        buscando aprender e crescer para impactar positivamente o cotidiano das
        pessoas. Também sou atleta, o que reflete meu compromisso com
        disciplina, foco e superação, valores que carrego em todas as áreas da
        minha vida.
      </Text>

      <Group gap="lg" justify={screenSm ? "start" : "center"}>
        {socialData.map(({ Icon, color, label, href }, index) => (
          <ActionIcon
            key={index}
            variant="transparent"
            size={42}
            aria-label={label}
            onClick={() => window.open(href, "_blank")}
            className={classes.icon}
          >
            <Icon size={40} color={color} />
          </ActionIcon>
        ))}
      </Group>
    </Stack>
  );
}

const useStyles = createStyles(() => ({
  icon: {
    transition: "transform 0.3s ease", // Suaviza a transição
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}));
