import { Box } from "@chakra-ui/react";

type PageSection = {
  children: React.ReactNode;
};

const PageSection = ({ children }: PageSection) => {
  return (
    <Box bg="brand.gray.500" py="96px" as="section" minHeight="100vh">
      {children}
    </Box>
  );
};

export default PageSection;
