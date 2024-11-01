import { Suspense } from "react";
import NavBar from "./HeaderComponents/NavBar";
import Loader from "./common/Loader";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minHeight="100%">
      <NavBar />
      <Box as="main" minHeight="100%">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Box>
    </Box>
  );
};

export default Layout;
