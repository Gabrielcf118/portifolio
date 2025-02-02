import { Stack } from "@mantine/core";
import ProjectResumeSection from "../../Components/Projects/ProjectResumeSection";
import ProjectsSection from "../../Components/Projects/ProjectsSection";
import FooterLove from "../../Components/Footer";

export default function ProjectsPage() {
  return (
    <Stack gap={180}>
      <ProjectResumeSection />

      <ProjectsSection />

      <FooterLove />
    </Stack>
  );
}
