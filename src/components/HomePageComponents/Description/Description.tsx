import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box
      w={{ lg: "720px" }}
      bg="brand.gray.500"
      borderRadius="30px"
      p={{ base: "6", lg: "98px 108px 98px 64px" }}
      minH="530px"
    >
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "48px" }}
        lineHeight="1.2"
        letterSpacing="-0.02em"
        fontWeight="medium"
      >
        Unlock your potential with the best language tutors
      </Heading>
    </Box>
  );
};

export default Description;
