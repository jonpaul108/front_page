import { Text, Title, TextInput, Button, Image, Container, AspectRatio, Stack} from "@mantine/core";
// import image from "./image.svg";
import classes from "./styles.module.css";

export default function WorkExample({ title, mid, description}) {
  return (
      <div className={classes.wrapper}>
        <div className={classes.body}>
        <Title className={classes.title}>{title}</Title>
          <Text fw={500} fz="lg" mb={5}>
          {mid}
          </Text>
          <Text fz="sm" c="dimmed">
          { description }
          </Text>

    
        </div>

        <div className={classes.vidContainer}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/mzJ4vCjSt28"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </div>
  );
}
