import { Image, Center } from '@mantine/core';

function MainImage() {
  return (
    <Center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "calc(var(--mantine-spacing-sm) * 4) 0",
        
      }}
    >
      <Image
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      />
    </Center>
  );
}

export default MainImage;