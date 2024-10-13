import { NavLink } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <HStack as="ul" spacing="7">
      <NavLink to="/">
        <Text py="8">Home</Text>
      </NavLink>
      <NavLink to="/teachers">
        <Text py="8">Teachers</Text>
      </NavLink>
    </HStack>
  );
};

export default NavLinks;
