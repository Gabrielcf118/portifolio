import {
  ActionIcon,
  Button,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import eu from "../../assets/eu.png";
import { socialData } from "../../Components/Home/data";
import { useScreenLargerThan } from "../../Layout/useScreenLargerThan";
import { createStyles } from "@mantine/emotion";
import FooterLove from "../../Components/Footer";

export default function ContactPage() {
  const screenSm = useScreenLargerThan("sm");
  const { classes } = useStyles();

  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Image
          src={eu}
          w={400}
          radius={500}
          style={{ border: "5px solid #001C55" }}
          data-aos="fade-right"
        />

        <Stack data-aos="fade-left">
          <Text
            ta={{ base: "center", sm: "start" }}
            fz={{ base: 30, md: 35, lg: 45 }}
            c="azulEscuro.5"
            mb={20}
          >
            Contate - me
          </Text>

          <Text fz={21} c="azulClaro" fw={500}>
            Estou presente em diversas mídias sociais. Pode me enviar uma
            mensagem, e responderei em até 24 horas. Espero poder contribuir com
            sua demanda ou projeto!
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

          <Button
            mt="lg"
            color="azulEscuro.5"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1eQBWRKEzIhqShfL31NmcbKdU1ehd37cw/view?usp=sharing",
                "_blank"
              )
            }
            lts={1}
            fw={500}
            p="8px 16px"
          >
            Veja meu resumo
          </Button>
        </Stack>
      </SimpleGrid>

      <FooterLove />
    </>
  );
}

const useStyles = createStyles(() => ({
  icon: {
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}));
