import { Grid, Image } from "@mantine/core";
import ProjectResume from "./ProjectResume";
import projectSvg from "../../assets/projects.svg";

export default function ProjectResumeSection() {
  return (
    <Grid justify="center" align="center" gutter="xl">
      <Grid.Col
        span={{ base: 12, sm: 6 }}
        order={{ base: 2, sm: 1 }}
        data-aos="fade-right"
      >
        <ProjectResume />
      </Grid.Col>

      <Grid.Col
        span={{ base: 12, sm: 6 }}
        order={{ base: 1, sm: 2 }}
        data-aos="fade-left"
      >
        <Image w="100%" src={projectSvg} />
      </Grid.Col>
    </Grid>
  );
}
