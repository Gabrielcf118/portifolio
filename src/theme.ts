import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    azulClaro: [
      "#EEF1F6", // Tom mais claro
      "#D8DEE8",
      "#C2CCD9",
      "#ABBACB",
      "#95A8BC",
      "#7F8DAA", // Cor base principal
      "#66738B",
      "#4E5A6D",
      "#36404E",
      "#1E2831", // Tom mais escuro
    ],
    azulEscuro: [
      "#E4E8F4", // Tom mais claro
      "#C6D0EA",
      "#A8B7DF",
      "#8B9FD5",
      "#6D87CB",
      "#001C55", // Cor base principal
      "#001841",
      "#00132E",
      "#000D1A",
      "#000610", // Tom mais escuro
    ],
  },

  fontFamily: "Montserrat, sans-serif",
  headings: {
    fontFamily: "Great Vibes, cursive",
  },
});
