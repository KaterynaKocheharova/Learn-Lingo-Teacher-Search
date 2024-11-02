import PageContainer from "../components/common/PageContainer";
import { Flex, Image } from "@chakra-ui/react";
import Description from "../components/HomePageComponents/Description";
import Benefits from "../components/HomePageComponents/Benefits";

const HomePage = () => {
  return (
    <PageContainer as="section">
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        gap="24px"
        justify={{ base: "center", lg: "space-between" }}
        align="flex-between"
      >
        <Description />
        <Image
          boxSize={{ base: "100%", md: "70%", lg: "568px" }}
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
