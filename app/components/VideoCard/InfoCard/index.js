import { Text, Title, TextInput, Button, Image, Container, AspectRatio, Stack} from "@mantine/core";
// import image from "./image.svg";
import classes from "./styles.module.css";

export default function WorkExample() {
  return (
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text fw={500} fz="lg" mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text fz="sm" c="dimmed">
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
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
