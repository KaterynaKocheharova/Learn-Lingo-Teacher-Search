import PageContainer from "../components/common/PageContainer";
import { Flex, Image } from "@chakra-ui/react";
import Description from "../components/HomePageComponents/Description/Description";
import Benefits from "../components/HomePageComponents/Description/Benefits";

const HomePage = () => {
  return (
    <PageContainer>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        gap="24px"
        justify={{ base: "center", lg: "space-between" }}
        align="flex-between"
      >
        <Description />
        <Image
          boxSize={{ base: "100%", md: "400px", lg: "568px" }}
          borderRadius="30px"
          objectFit="cover"
          src="/hero-image.png"
          alt="home page banner playful cartoon girl at the computer"
          alignSelf="center"
        />
        <Benefits />
      </Flex>
    </PageContainer>
  );
};

export default HomePage;
