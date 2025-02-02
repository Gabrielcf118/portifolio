import { Image, Grid, Text } from "@mantine/core";

import DeveloperSection from "./Developer";
import DataScience from "./DataScience";
import secondSvg from "../../assets/second.svg";
import thirdSvg from "../../assets/third.svg";

export default function SecondSection() {
  return (
    <>
      <Text fz={{ base: 40, sm: 60 }} c="azulEscuro.5" ta="center" fw={500}>
        O que eu faço?
      </Text>
      <Grid justify="center" align="center" gutter="xl">
        <Grid.Col span={{ base: 12, sm: 6 }} mb={160} data-aos="fade-right">
          <Image w="100%" src={secondSvg} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }} mb={160} data-aos="fade-left">
          <DeveloperSection />
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, xs: 6 }}
          order={{ base: 1, sm: 2 }}
          data-aos="fade-left"
        >
          <Image w="100%" src={thirdSvg} />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          order={{ base: 2, sm: 1 }}
          data-aos="fade-right"
        >
          <DataScience />
        </Grid.Col>
      </Grid>
    </>
  );
}
