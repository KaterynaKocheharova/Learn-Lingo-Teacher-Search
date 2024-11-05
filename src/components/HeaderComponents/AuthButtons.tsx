import { HStack } from "@chakra-ui/react";
import RegistrationButton from "./RegistrationButton";
import LoginLogoutButton from "./LoginLogoutButton";

const AuthButtons = () => {
  return (
    <HStack wrap="wrap">
      <LoginLogoutButton />
      <RegistrationButton />
    </HStack>
  );
};

export default AuthButtons;
