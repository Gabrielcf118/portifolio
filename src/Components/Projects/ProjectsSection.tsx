import {
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { projectsData } from "./data";
import { createStyles } from "@mantine/emotion";

export default function ProjectsSection() {
  const { classes } = useStyles();
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} data-aos="fade-up">
      {projectsData.map((item) => (
        <Paper bg="azulEscuro.1" p="lg" key={item.id} shadow="xl">
          <Stack>
            <Group>
              {item.icon && (
                <item.icon.icon style={{ color: item.icon.color }} />
              )}
              <Text fz={25} c="azulEscuro.5">
                {item.title}
              </Text>
            </Group>
            <Text fz={15} c="azulClaro.5" fw={500}>
              {item.text}
            </Text>
            <Group justify="end">
              {/* Mapeando os ícones de desenvolvedor */}
              {item.iconsDev?.map((dev, index) => (
                <Tooltip key={index} label={dev.label} position="top" withArrow>
                  <UnstyledButton className={classes.icon}>
                    <dev.icon size={35} style={{ color: dev.color }} />
                  </UnstyledButton>
                </Tooltip>
              ))}
            </Group>
          </Stack>
        </Paper>
      ))}
    </SimpleGrid>
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
