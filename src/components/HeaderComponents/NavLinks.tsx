import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";
import clsx from "clsx";
import css from "./NavLinks.module.css";

const NavLinks = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const buildActiveClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(isActive && css["active-link"]);
  };

  return (
    <HStack as="ul" spacing="7" wrap="wrap">
      <NavLink to="/" className={buildActiveClass}>
        <Text py="8">Home</Text>
      </NavLink>
      <NavLink to="/teachers" className={buildActiveClass}>
        <Text py="8">Teachers</Text>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites" className={buildActiveClass}>
          <Text py="8">Favorites</Text>
        </NavLink>
      )}
    </HStack>
  );
};

export default NavLinks;
