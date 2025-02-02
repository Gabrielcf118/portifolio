import { Group, Stack, Text, Tooltip, UnstyledButton } from "@mantine/core";
import { PiArrowFatLineRightLight } from "react-icons/pi";

import { iconScienceData } from "../data";
import { useScreenLargerThan } from "../../../Layout/useScreenLargerThan";
import { createStyles } from "@mantine/emotion";

export default function DataScience() {
  const screenSm = useScreenLargerThan("sm");
  const { classes } = useStyles();
  return (
    <Stack gap="md">
      <Text
        ta={{ base: "center", sm: "start" }}
        fz={{ base: 30, md: 35, lg: 45 }}
        c="azulEscuro.5"
        mb={20}
      >
        Ciência de dados
      </Text>

      <Group gap="lg" mb={20} justify={screenSm ? "start" : "center"}>
        {iconScienceData.map(({ Icon, label, color }, index) => (
          <Tooltip key={index} label={label} color="gray">
            <UnstyledButton className={classes.icon}>
              <Icon size={40} color={color} />
            </UnstyledButton>
          </Tooltip>
        ))}
      </Group>

      <Stack>
        <Group>
          <Text fz={21} c="azulClaro" fw={500}>
            <PiArrowFatLineRightLight size={18} /> Construindo robôs de
            automação web com Python
          </Text>
        </Group>
        <Group>
          <Text fz={21} c="azulClaro" fw={500}>
            <PiArrowFatLineRightLight size={18} /> Coletando dados, manipulando
            informações com SQL e Excel para transformar dados em decisões
            inteligentes.
          </Text>
        </Group>
        <Group>
          <Text fz={21} c="azulClaro" fw={500}>
            <PiArrowFatLineRightLight size={18} /> Utilizando o ChatGPT para
            transformar ideias em soluções inteligentes e otimizar processos com
            criatividade e eficiência.
          </Text>
        </Group>
      </Stack>
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
