import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export type PrivateRouteProps = {
  component: React.ReactNode;
  redirectTo: string;
};

const PrivateRoute = ({
  component: Component,
  redirectTo,
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
