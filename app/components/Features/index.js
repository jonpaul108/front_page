import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconBrandDatabricks,
  IconJumpRope,
  IconBuilding,
} from "@tabler/icons-react";
import classes from "./styles.module.css";

const mockdata = [
  {
    title: "Automations",
    description:
      "Streamline client engagement and lead management with custom automations, from email responses to event registrations, leveraging Google Workspace and more.",
    icon: IconGauge,
  },
  {
    title: "Workflows",
    description:
      "Enhance your business with efficient workflows that integrate seamlessly into your teams and sales processes, boosting productivity and accuracy.",
    icon: IconJumpRope,
  },
  {
    title: "Data",
    description:
      "Simplify your data management with smart solutions for Google Sheets, ensuring accuracy, eliminating duplicates, and maintaining real-time inventory visibility.",
    icon: IconBrandDatabricks,
  },
  {
    title: "Custom Dev",
    description:
      "Our team of developers utilize their deep expertise to solve your unique business challenges - the possibilities are limitless.",
    icon: IconBuilding,
  },
];

export default function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Our Bespoke Solutions
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Solve your problems with our{" "}
        <span
          style={{
            "background-color": "var(--mantine-color-blue-1)",
            "border-radius": "5px",
            padding: "5px",
          }}
        >
          solutions
        </span>
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Burdened by time-consuming manual processes, disorganized workflows, and
        unreliable data management? Many have been in your shoes. Explore how
        our specialized automation and scripting solutions can revitalize your
        operations, bringing efficiency and clarity to your small business.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 4 }} spacing={ {base:10, sm:"md"}} mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
