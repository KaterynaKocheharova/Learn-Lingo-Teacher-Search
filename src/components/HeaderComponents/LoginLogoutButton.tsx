import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectIsLoggedIn, selectIsLoading } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";
import AppModal from "../ModalReusableComponents/AppModal";
import LoginForm from "../Auth/LoginForm";
import LogoutConfirmationModal from "./LogoutConfirmationModal";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { toastConfigs } from "../../config/toast";
import { clearFavorites } from "../../redux/favorites/slice";

const loginIcon = (
  <svg width="20" height="20">
    <use href="/sprite.svg#icon-log-in"></use>
  </svg>
);

const LoginLogoutButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      })
      .then(() => {
        onClose();
      })
      .catch(() => {
        toast({
          ...toastConfigs,
          description: "Something went wrong. Try again now or later",
          status: "error",
        });
      });
  };

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <>
      <Button
        variant="ghost"
        _hover={{ bg: "brand.orange.100" }}
        px="16px"
        leftIcon={loginIcon}
        onClick={onOpen}
        isLoading={Boolean(isLoading === "logout-in-progress")}
        spinner={<Spinner size="sm" />}
      >
        {isLoggedIn ? "Log out" : "Log in"}
      </Button>
      {isLoggedIn ? (
        <LogoutConfirmationModal
          isOpen={isOpen}
          onClose={onClose}
          onConfirmClick={handleLogout}
        />
      ) : (
        <AppModal isOpen={isOpen} onClose={onClose}>
          <LoginForm onClose={onClose} />
        </AppModal>
      )}
    </>
  );
};

export default LoginLogoutButton;
