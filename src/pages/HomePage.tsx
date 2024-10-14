import PageContainer from "../components/common/PageContainer";
import Description from "../components/HomePageComponents/Description/Description";
import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <PageContainer>
      <Description />
      {/* <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "720px 568px",
        }}
        gap={6}
        templateRows={{
          lg: "auto auto auto", 
        }}
      >
        <GridItem colSpan={{ base: 1, md: 2, lg: 1 }} h="10" bg="blue.500" />
        <GridItem colSpan={{ base: 1, md: 1 }} h="10" bg="blue.500" />
        <GridItem colSpan={{ base: 1, md: 1 }} h="10" bg="blue.500" />
      </Grid> */}
    </PageContainer>
  );
};

export default HomePage;
