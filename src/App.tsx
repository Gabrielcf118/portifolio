import { Outlet } from "react-router-dom";
import "./App.css";

import "@mantine/core/styles.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { Container } from "@mantine/core";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação
      easing: "ease-in-out",
      once: true, // Roda a animação apenas uma vez
    });
  }, []);

  return (
    <Container size="xl">
      <Outlet />
    </Container>
  );
}
