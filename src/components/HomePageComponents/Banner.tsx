import { Image } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Image
      boxSize={{ base: "100%", md: "70%", lg: "568px" }}
      borderRadius="30px"
      objectFit="cover"
      src="/hero-image.png"
      alt="home page banner playful cartoon girl at the computer"
      alignSelf="center"
    />
  );
};

export default Banner;
