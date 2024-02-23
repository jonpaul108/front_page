import { Container, Stack } from "@mantine/core";
import InfoCard from "./InfoCard";

export default function VideoCard () {
  return ( 
      <Stack>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </Stack>
  )
}