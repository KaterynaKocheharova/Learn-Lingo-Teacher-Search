import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

const NavLinks = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  
  return (
    <HStack as="ul" spacing="7" wrap="wrap">
      <NavLink to="/">
        <Text py="8">Home</Text>
      </NavLink>
      <NavLink to="/teachers">
        <Text py="8">Teachers</Text>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites">
          <Text py="8">Favorites</Text>
        </NavLink>
      )}
    </HStack>
  );
};

export default NavLinks;
