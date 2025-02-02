import { Group, Stack, Text, Tooltip, UnstyledButton } from "@mantine/core";
import { PiArrowFatLineRightLight } from "react-icons/pi";

import { iconDeveloperData } from "../data";
import { useScreenLargerThan } from "../../../Layout/useScreenLargerThan";
import { createStyles } from "@mantine/emotion";

export default function DeveloperSection() {
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
        Desenvolvedor Full Stack
      </Text>

      <Group gap="lg" mb={20} justify={screenSm ? "start" : "center"}>
        {iconDeveloperData.map(({ Icon, label, color }, index) => (
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
            <PiArrowFatLineRightLight size={18} /> Contruindo web-sites
            responsivos front-end usando Zustand
          </Text>
        </Group>
        <Group>
          <Text fz={21} c="azulClaro" fw={500}>
            <PiArrowFatLineRightLight size={18} /> Desenvolvendo aplicativos
            mobile usando react native
          </Text>
        </Group>
        <Group>
          <Text fz={21} c="azulClaro" fw={500}>
            <PiArrowFatLineRightLight size={18} /> Criando aplicações back-end
            com Node.js, Javascript e Axios
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
