import { Grid, Image } from "@mantine/core";
import BlocksSvg from "../../assets/blocks.svg";
import ExperienceResume from "./ExperienceResume";

export default function ExperiencesResumeSection() {
  return (
    <Grid justify="center" align="center" gutter="xl">
      <Grid.Col
        span={{ base: 12, sm: 6 }}
        order={{ base: 2, sm: 1 }}
        data-aos="fade-right"
      >
        <Image w="100%" src={BlocksSvg} />
      </Grid.Col>

      <Grid.Col
        span={{ base: 12, sm: 6 }}
        order={{ base: 1, sm: 2 }}
        data-aos="fade-left"
      >
        <ExperienceResume />
      </Grid.Col>
    </Grid>
  );
}
