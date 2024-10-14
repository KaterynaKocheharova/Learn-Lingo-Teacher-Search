import { Box } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import AppButton from "../../common/AppButton";
import { NavLink } from "react-router-dom";

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
        mb="8"
      >
        Unlock your potential with the best{" "}
        <Text as="i" borderRadius="8px" bg="orange.100" px="1">
          language
        </Text>{" "}
        tutors
      </Heading>
      <Text mb="16">
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </Text>
      <NavLink to="/teachers">
        <AppButton
          as="p"
          fontSize="18px"
          lineHeight="1.5"
          py="18px"
          px="88px"
          w={{ base: "100%", lg: "267px" }}
          h="60px"
        >
          Get started
        </AppButton>
      </NavLink>
    </Box>
  );
};

export default Description;
