import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { HStack, Box } from "@chakra-ui/react";
import PageContainer from "../common/PageContainer";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import Greeting from "./Greeting";

const NavBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <PageContainer bg="inherit">
      <HStack
        wrap="wrap"
        justify="space-between"
        as="header"
        px={{ md: "16" }}
        pb={{ base: "45px", sm2: "0", md: "45px", md2: "0" }}
      >
        <Logo />
        <NavLinks />
        <HStack spacing="16px">
          {isLoggedIn && <Greeting />}
          <AuthButtons />
        </HStack>
      </HStack>
    </PageContainer>
  );
};

export default NavBar;
