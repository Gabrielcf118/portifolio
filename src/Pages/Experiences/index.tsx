import { Stack } from "@mantine/core";
import ExperiencesResumeSection from "../../Components/Experiences/ExperienceResumeSection";
import RoadSection from "../../Components/Experiences/RoadSection";
import FooterLove from "../../Components/Footer";

export default function ExperiencesPage() {
  return (
    <Stack gap={180}>
      <ExperiencesResumeSection />

      <RoadSection />

      <FooterLove />
    </Stack>
  );
}
