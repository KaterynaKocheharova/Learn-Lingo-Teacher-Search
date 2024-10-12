import { Container } from "@chakra-ui/react";

type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Container maxW="1440" px={{ base: "16px", lg: "64px" }}>
      {children}
    </Container>
  );
};

export default PageContainer;
