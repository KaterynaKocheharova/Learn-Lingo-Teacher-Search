import { NavLink } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <NavLink to="/">
      <HStack spacing="2" py="8">
        <svg width="28" height="28">
          <use href="/sprite.svg#icon-ukraine"></use>
        </svg>
        <Text
          fontSize="xl"
          fontWeight="medium"
          color="brand.black.900"
          lineHeight="1.2"
          letterSpacing="-0.02em"
        >
          LearnLingo
        </Text>
      </HStack>
    </NavLink>
  );
};

export default Logo;
