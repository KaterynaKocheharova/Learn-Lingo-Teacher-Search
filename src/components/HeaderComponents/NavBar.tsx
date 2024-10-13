import { Box, HStack } from "@chakra-ui/react";
import PageContainer from "../common/PageContainer";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <PageContainer>
      <Box as="header" mx={{ lg: "16" }}>
        <HStack as="nav" maxW="462px">
          <Logo />
          <NavLinks />
        </HStack>
      </Box>
    </PageContainer>
  );
};

export default NavBar;
