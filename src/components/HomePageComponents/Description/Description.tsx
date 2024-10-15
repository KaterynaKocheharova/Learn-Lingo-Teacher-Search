import { Box } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import AppButton from "../../common/AppButton";
import { NavLink } from "react-router-dom";

const Description = () => {
  return (
    <Box
      w={{ base: "100%", md: "400px", lg: "720px" }}
      bg="brand.gray.500"
      borderRadius="30px"
      p={{ base: "6", lg: "98px 108px 98px 64px" }}
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
        <Text
          as="i"
          fontWeight="normal"
          position="relative"
          zIndex="1"
          mr="8px"
          sx={{
            "::after": {
              position: "absolute",
              content: '""',
              display: "block",
              bg: "brand.orange.100",
              top: "50%",
              left: "0",
              transform: "translateY(-40%)",
              width: "calc(100% + 4px)",
              height: "70%",
              zIndex: "-1",
              borderRadius: "6px",
            },
          }}
        >
          language
        </Text>
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
