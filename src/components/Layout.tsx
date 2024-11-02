import NavBar from "./HeaderComponents/NavBar";
import Loader from "./common/Loader";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Box as="main">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Box>
    </>
  );
};

export default Layout;
