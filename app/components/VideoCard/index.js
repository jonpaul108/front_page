import { Title, Stack } from "@mantine/core";
import InfoCard from "./InfoCard";

export default function VideoCard() {
  const vids = [
    {
      title: "Solve Shift Schedules...",
      mid: "With automated scheduling in Sheets!",
      description:
        "You will never wonder if a shift is covered, or have to field availability. This custom solution for a non-profit is live and simplifying their event volunteer experience. ",
    },
    {
      title: "Solve Shift Schedules...",
      mid: "With automated scheduling in Sheets!",
      description:
        "You will never wonder if a shift is covered, or have to field availability. This custom solution for a non-profit is live and simplifying their event volunteer experience. ",
    },
    {
      title: "Solve Shift Schedules...",
      mid: "With automated scheduling in Sheets!",
      description:
        "You will never wonder if a shift is covered, or have to field availability. This custom solution for a non-profit is live and simplifying their event volunteer experience. ",
    },
  ];
  return (
    <Stack pt={120} mb={ 120}>
      <Title
        order={2}
        c="var(--mantine-color-blue-6)"
        fw="800"
        fz="calc(2.5rem * var(--mantine-scale))"
        ta="center"
      >
        Example Work
      </Title>
      {vids.map((el) => {
        const { title, mid, description } = el;
        return <InfoCard {...el} />;
      })}
    </Stack>
  );
}