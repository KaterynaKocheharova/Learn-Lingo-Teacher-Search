import PageContainer from "../components/common/PageContainer";
import HomePageElementsWrapper from "../components/HomePageComponents/HomePageElementsWrapper";
import Description from "../components/HomePageComponents/Description";
import Benefits from "../components/HomePageComponents/Benefits";
import Banner from "../components/HomePageComponents/Banner";

const HomePage = () => {
  return (
    <PageContainer as="section">
      <HomePageElementsWrapper>
        <Description />
        <Banner />
        <Benefits />
      </HomePageElementsWrapper>
    </PageContainer>
  );
};

export default HomePage;
