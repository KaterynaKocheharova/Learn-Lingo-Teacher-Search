import { useOpen } from "../../hooks/useOpen";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectIsLoggedIn, selectIsLoading } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";

import AppModal from "../ModalReusableComponents/AppModal";
import LoginForm from "../Auth/LoginForm";
import { Button, Spinner, useToast } from "@chakra-ui/react";

import { toastConfigs } from "../../utils/toast";
import { clearFavorites } from "../../redux/favorites/slice";

const loginIcon = (
  <svg width="20" height="20">
    <use href="/sprite.svg#icon-log-in"></use>
  </svg>
);

const LoginLogoutButton = () => {
  const { isOpen, open, close } = useOpen();

  const dispatch = useAppDispatch();

  const toast = useToast();

  const isLoading = useAppSelector(selectIsLoading);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        dispatch(clearFavorites());
        toast({
          ...toastConfigs,
          description: "Logged out successfully",
          status: "success",
        });
      });
  };

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <>
      <Button
        variant="ghost"
        _hover={{ bg: "transparent" }}
        px="16px"
        leftIcon={loginIcon}
        onClick={isLoggedIn ? handleLogout : open}
        isLoading={Boolean(isLoading === "logout-in-progress")}
        spinner={<Spinner size="sm" />}
      >
        {isLoggedIn ? "Log out" : "Log in"}
      </Button>
      <AppModal isOpen={isOpen} onClose={close}>
        <LoginForm onClose={close} />
      </AppModal>
    </>
  );
};

export default LoginLogoutButton;
