import AnimationWrapper from "./AnimationWrapper";
import { Box } from "@chakra-ui/react";

type PageSectionProps = {
  children: React.ReactNode;
};

const PageSection = ({ children }: PageSectionProps) => {
  return (
    <AnimationWrapper>
      <Box
        backgroundImage="linear-gradient(90deg, var(--chakra-colors-brand-gray-500), var(--chakra-colors-brand-gray-300))"
        py="96px"
        as="section"
        minHeight="100vh"
        w="100%"
        h="100%"
        overflow="hidden"
      >
        {children}
      </Box>
    </AnimationWrapper>
  );
};

export default PageSection;
