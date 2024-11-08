import { Box, Flex } from "@chakra-ui/react";

type PageSectionProps = {
  children: React.ReactNode;
};

const PageSection = ({ children }: PageSectionProps) => {
  return (
    <Box
      backgroundImage="linear-gradient(90deg, var(--chakra-colors-brand-gray-500), var(--chakra-colors-brand-gray-300))"
      py="96px"
      as="section"
      minHeight="100vh"
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <Flex justify="flex-end"></Flex>
      {children}
    </Box>
  );
};

export default PageSection;
