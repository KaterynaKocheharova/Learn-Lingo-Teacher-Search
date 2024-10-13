import { Button } from "@chakra-ui/react";
type LoginLogoutButtonProps = {
  variant: "login" | "logout";
};

const LoginLogoutButton = ({ variant }: LoginLogoutButtonProps) => {
  return (
    <Button variant="ghost" _hover={{ bg: "transparent" }} px="16px">
      Log in
    </Button>
  );
};

export default LoginLogoutButton;
