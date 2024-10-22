import { Suspense } from "react";
import NavBar from "./HeaderComponents/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<p>Loading the page</p>}>{children}</Suspense>
    </div>
  );
};

export default Layout;
