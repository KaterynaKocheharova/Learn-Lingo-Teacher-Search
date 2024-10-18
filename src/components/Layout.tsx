import { Suspense } from "react";
import NavBar from "./HeaderComponents/NavBar";
import Loader from "./common/Loader";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <Loader />
      <Suspense fallback={<p>Loading the page</p>}>{children}</Suspense>
    </div>
  );
};

export default Layout;
