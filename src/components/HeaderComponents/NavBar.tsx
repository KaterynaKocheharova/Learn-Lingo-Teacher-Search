import { Box, HStack } from "@chakra-ui/react";
import PageContainer from "../common/PageContainer";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <PageContainer>
      <Box as="header" mx="16">
        <HStack as="nav" maxW="462px">
          <Logo />
        </HStack>
      </Box>
    </PageContainer>
  );
};

export default NavBar;
