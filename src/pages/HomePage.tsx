import PageContainer from "../components/common/PageContainer";

import { Flex, Image } from "@chakra-ui/react";

import Description from "../components/HomePageComponents/Description";
import Benefits from "../components/HomePageComponents/Benefits";
import Banner from "../components/HomePageComponents/Banner";

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
        <Banner />
        <Benefits />
      </Flex>
    </PageContainer>
  );
};

export default HomePage;
