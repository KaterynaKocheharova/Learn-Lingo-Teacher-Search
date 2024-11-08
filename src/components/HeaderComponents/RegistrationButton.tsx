import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AppButton from "../common/AppButton";
import AppModal from "../ModalReusableComponents/AppModal";
import RegistrationForm from "../Auth/RegistrationForm";
import { useDisclosure } from "@chakra-ui/react";

const RegistrationButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) return null;

  return (
    <>
      <AppButton
        color="brand.white.900"
        backgroundColor="brand.black.900"
        px="39px"
        _hover={{
          backgroundColor: "brand.orange.800",
          color: "brand.black.900",
        }}
        _focus={{
          backgroundColor: "brand.orange.800",
          color: "brand.black.900",
        }}
        _active={{
          backgroundColor: "brand.orange.800",
          color: "brand.black.900",
        }}
        onClick={onOpen}
      >
        Registration
      </AppButton>
      <AppModal isOpen={isOpen} onClose={onClose}>
        <RegistrationForm onClose={onClose} />
      </AppModal>
    </>
  );
};

export default RegistrationButton;
