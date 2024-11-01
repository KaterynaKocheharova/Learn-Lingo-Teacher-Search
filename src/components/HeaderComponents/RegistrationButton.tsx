import AppButton from "../common/AppButton";
import AppModal from "../ModalReusableComponents/AppModal";
import RegistrationForm from "../Auth/RegistrationForm";
import { useDisclosure } from "@chakra-ui/react";

const RegistrationButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AppButton
        color="brand.white.900"
        backgroundColor="brand.black.900"
        px="39px"
        _hover={{
          backgroundColor: "brand.black.900",
          color: "brand.white.900",
        }}
        _focus={{
          backgroundColor: "brand.black.900",
          color: "brand.white.900",
        }}
        _active={{
          backgroundColor: "brand.black.900",
          color: "brand.white.900",
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
