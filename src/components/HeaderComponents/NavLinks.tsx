import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { HStack, Text, Box } from "@chakra-ui/react";
import clsx from "clsx";
import css from "./NavLinks.module.css";

const NavLinks = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const buildActiveClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(css.link, isActive && css["active-link"]);
  };

  return (
    <HStack as="ul" spacing="7" wrap="wrap">
      <Box as="li" >
        <NavLink to="/" className={buildActiveClass}>
          <Text py="8">Home</Text>
        </NavLink>
      </Box>
      <Box as="li">
        <NavLink to="/teachers" className={buildActiveClass}>
          <Text py="8">Teachers</Text>
        </NavLink>
      </Box>
      {isLoggedIn && (
        <Box as="li">
          <NavLink to="/favorites" className={buildActiveClass}>
            <Text py="8">Favorites</Text>
          </NavLink>
        </Box>
      )}
    </HStack>
  );
};

export default NavLinks;
