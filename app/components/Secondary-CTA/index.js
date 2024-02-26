'use client'

import { Title, Text, Button, Container } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./styles.module.css";

export default function HeroText() {
  return (
    <Container className={classes.wrapper} size="md">
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title} order={1}>
          Driving Business Efficiency Through{" "}
          <Text component="span" className={classes.highlight} inherit>
            Tailored Automation
          </Text>{" "}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Optimize your operations and seize every opportunity. Our tailored
            automation solutions are designed to save you time, cut costs, and
            attract more clients
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            Find Out More
          </Button>
          <Button className={classes.control} size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  );
}
