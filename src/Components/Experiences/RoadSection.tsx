import { Blockquote, SimpleGrid, Text } from "@mantine/core";
import { experiencesData } from "./data";

export default function RoadSection() {
  return (
    <SimpleGrid cols={1} data-aos="fade-up">
      {experiencesData.map((item) => (
        <Blockquote
          key={item.id}
          color="azulEscuro.5"
          iconSize={60}
          icon={item.icon ? <item.icon size={30} /> : null}
          cite={
            <Text fw={500} c="azulEscuro.5">
              {item.date}
            </Text>
          }
          mt="xl"
        >
          <Text c="azulClaro.5" fw={500}>
            {item.text}
          </Text>
        </Blockquote>
      ))}
    </SimpleGrid>
  );
}
