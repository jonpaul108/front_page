// import Button from "./components/Button.jsx";
"use client";
import { useMantineColorScheme, Button, Group, AspectRatio, Stack, Container } from "@mantine/core";
import Hero from "./components/Hero";
import SecondCTA from "./components/Secondary-CTA";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Contact from "./components/Contact";

export default function HomePage() {
  //  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
   <Container>
      
    <Stack gap="xl">
      <Hero />
      <SecondCTA />
      <VideoCard />
      <Features />
      <Contact />
      <Footer />
    </Stack>
   </Container> 
  );
}

    // <Group>
    //   <Button onClick={() => setColorScheme("light")}>Light</Button>
    //   <Button onClick={() => setColorScheme("dark")}>Dark</Button>
    //   <Button onClick={() => setColorScheme("auto")}>Auto</Button>
    //   <Button onClick={clearColorScheme}>Clear</Button>
    // </Group>;
