import {
  Indicator,
  Badge,
  Title,
  Text,
  Card,
  Container,
  ThemeIcon,
  SimpleGrid,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconGauge,
  IconAirBalloon,
  IconChessKnightFilled,
  IconLayersIntersect,
} from "@tabler/icons-react";
import classes from "./styles.module.css";


export default function BespokeProcess() {
  const processes = [
    {
      icon: IconAirBalloon,
      title: "Exploration and Discovery Consultation",
      desc: "Deep dive with the client to uncover what's effective and identify areas for improvement, setting the foundation for transformative solutions.",
      num: "1",
    },
    {
      icon: IconChessKnightFilled,
      title: "Bespoke Automation Blueprint",
      desc: "Our experts meticulously design your automation strategy, detailing integrations and offering a transparent cost analysis to align with your business objectives",
      num: "2",
    },
    {
      icon: IconLayersIntersect,
      title: "Implementation and Integration",
      desc: "We move forward with the construction and integration of your tailored automation systems, ensuring a smooth transition and operational excellence.",
      num: "3",
    },
  ];

  const processCards = processes.map(item => {
    const { icon, title, desc, num } = item;
    return (
      <Card>
        <Indicator
          className={classes.indicator}
          style={{ margin: "auto" }}
          label={num}
          size="24"
          styles={{
            "font-size": "var(--mantine-font-size-md)",
          }}
        >
          <item.icon
            style={{
              width: "calc(5rem * var(--mantine-scale))",
              height: "calc(5rem * var(--mantine-scale))",
              backgroundColor: "var(--mantine-color-blue-4)",
              borderRadius: "var(--mantine-radius-md)",
              color: "var(--mantine-color-white)",
            }}
          ></item.icon>
        </Indicator>
        <Title order={3} ta="center">
          {title}
        </Title>
        <Text ta="center" c="var(--mantine-color-dimmed)">
          {desc}
        </Text>
      </Card>
    )
  })
  return (
    <Container pt={80} pb={30}>
      <Title
        ta="center"
        size={rem(40)}
        order={2}
        style={{
          fontWeight: "var(--mantine-h2-font-weight)",
          color: "var(--mantine-color-blue-6)"
        }}
      >
        Our Bespoke Process
      </Title>

      <SimpleGrid
        cols={{ base: 1, md: 3 }}
        spacing={{ base: 10, sm: "md" }}
        mt={50}
      >
        {processCards}
      </SimpleGrid>
    </Container>
  );
}