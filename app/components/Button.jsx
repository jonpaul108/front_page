import Link from "next/link";
import { Button } from "@mantine/core";

function CompButton({ text }) {
  return (
    <Button component={Link} href="/hello">
      { text }
    </Button>
  );
}

export default CompButton;


 