import { Stack } from "@mantine/core";
import FirstSection from "../../Components/Home/FirstSection";
import SecondSection from "../../Components/Home/SecondSection";
import FooterLove from "../../Components/Footer";

export default function HomePage() {
  return (
    <Stack gap={180}>
      <FirstSection />

      <SecondSection />

      <FooterLove />
    </Stack>
  );
}
