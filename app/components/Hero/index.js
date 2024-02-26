import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import img from "./img/img.png";
import classes from "./styles.module.css";
import { background } from "@chakra-ui/react";

export default function HeroBullets() {
  return (
    <Container size="md" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title} order={2}>
            Dispelling <span style={{ color:"var(--mantine-color-blue-6)"}}>Automation</span>{ " "}
            Misconceptions
          </Title>
          <Text c="dimmed" mt="md">
            In the realm of digital transformation, the notion that automation
            and scripting are too intricate or not suited for individual
            business requirements is a common hurdle. Our approach is designed
            to debunk these myths, offering streamlined, customized automation
            solutions that effortlessly meld with diverse business frameworks.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Effortless Integration with Existing Systems</b>
            </List.Item>
            <List.Item>
              <b>Swift Implementation for Immediate Impact</b>
            </List.Item>
            <List.Item>
              <b>Continuous Support for Uninterrupted Success</b>
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Find Out More
            </Button>
          </Group>
        </div>
        <Image src={img.src} className={classes.image} />
      </div>
    </Container>
  );
}
