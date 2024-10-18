import { Button, Spinner, useToast } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectIsLoggedIn, selectIsLoading } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";
import { toastConfigs } from "../../utils/toast";

const loginIcon = (
  <svg width="20" height="20">
    <use href="/sprite.svg#icon-log-in"></use>
  </svg>
);

const LoginLogoutButton = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const isLoading = useAppSelector(selectIsLoading);

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      toast({
        ...toastConfigs,
        description: "Logged out successfully",
        status: "success",
      });
    });
  };

  const handleLogin = () => {
    console.log("loginning");
  };

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Button
      variant="ghost"
      _hover={{ bg: "transparent" }}
      px="16px"
      leftIcon={loginIcon}
      onClick={isLoggedIn ? handleLogout : handleLogin}
      isLoading={Boolean(isLoading)}
      spinner={<Spinner size="sm" />}
    >
      {isLoggedIn ? "Log out" : "Log in"}
    </Button>
  );
};

export default LoginLogoutButton;
