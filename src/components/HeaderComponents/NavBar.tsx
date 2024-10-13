import { HStack, Spacer } from "@chakra-ui/react";
import PageContainer from "../common/PageContainer";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

const NavBar = () => {
  return (
    <PageContainer>
      <HStack wrap="wrap" justify="space-between" as="header" mx={{ lg: "16" }}>
        <HStack as="nav" w={{ lg: "390px" }}>
          <Logo />
          <Spacer />
          <NavLinks />
        </HStack>
        <AuthButtons />
      </HStack>
    </PageContainer>
  );
};

export default NavBar;
