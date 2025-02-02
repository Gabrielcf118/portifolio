import { Grid, Image } from "@mantine/core";
import firstSvg from "../../assets/first.svg";
import Social from "./Social";

export default function FirstSection() {
  return (
    <Grid justify="center" align="center" gutter="xl">
      <Grid.Col
        span={{ base: 12, sm: 6 }}
        order={{ base: 2, sm: 1 }}
        data-aos="fade-right"
      >
        <Social />
      </Grid.Col>

      <Grid.Col
        span={{ base: 12, sm: 6 }}
        order={{ base: 1, sm: 2 }}
        data-aos="fade-left"
      >
        <Image w="100%" src={firstSvg} />
      </Grid.Col>
    </Grid>
  );
}
