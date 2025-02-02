import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { theme } from "./theme";
import { MantineEmotionProvider } from "@mantine/emotion";

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <MantineEmotionProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineEmotionProvider>
  </MantineProvider>
);
