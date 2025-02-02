import { useState, useEffect } from "react";
import {
  Anchor,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createStyles } from "@mantine/emotion";
import { menuLinks } from "../Home/data";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { classes } = useStyles();

  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const items = menuLinks.map((link) => (
    <Anchor
      td="none"
      lts={1}
      fw={500}
      p="8px 16px"
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container size="xl" mb={120} data-aos="fade-down">
      <Group justify="space-between" h={75}>
        <Title fz={40} c="azulEscuro.5">
          Gabriel
          <Title fz={40} component="span" c="azulEscuro.5">
            O.
          </Title>
        </Title>

        <Group gap={50} visibleFrom="sm">
          {items}
        </Group>

        <Burger
          color="azulEscuro.5"
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="md"
        />
      </Group>

      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="md"
        title="Menu"
        withCloseButton
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <Stack gap={20}>{items}</Stack>
      </Drawer>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  link: {
    color: "#000",

    "&[data-active]": {
      transition: "background-color 0.3s ease, color 0.3s ease",
      backgroundColor: theme.colors.azulEscuro[5],
      borderRadius: theme.radius.xs,
      color: "#fff",
    },
  },
}));
