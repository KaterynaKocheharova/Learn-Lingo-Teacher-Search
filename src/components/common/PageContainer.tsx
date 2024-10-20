import { Container, ContainerProps } from "@chakra-ui/react";

type PageContainerProps = {
  children: React.ReactNode;
} & ContainerProps;

const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Container
      maxW={{ lg: "1440px" }}
      px={{ base: "16px", lg: "64px" }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
