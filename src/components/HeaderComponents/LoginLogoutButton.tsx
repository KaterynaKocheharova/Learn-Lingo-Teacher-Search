import { Button } from "@chakra-ui/react";
type LoginLogoutButtonProps = {
  variant: "login" | "logout";
};

const loginIcon = (
  <svg width="20" height="20">
    <use href="/sprite.svg#icon-log-in"></use>
  </svg>
);

const LoginLogoutButton = ({ variant }: LoginLogoutButtonProps) => {
  return (
    <Button
      variant="ghost"
      _hover={{ bg: "transparent" }}
      px="16px"
      leftIcon={loginIcon}
    >
      Log in
    </Button>
  );
};

export default LoginLogoutButton;
