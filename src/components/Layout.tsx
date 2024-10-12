import { Suspense } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Suspense fallback={<p>Loading the page</p>}>{children}</Suspense>
    </div>
  );
};

export default Layout;
