import AppModal from "../ModalReusableComponents/AppModal";
import StyledModalHeader from "../ModalReusableComponents/StyledModalHeader";
import AppButton from "../common/AppButton";
import { HStack } from "@chakra-ui/react";
import { ModalProps } from "@chakra-ui/react";

type LogoutConfirmationModalProps = Omit<ModalProps, "children"> & {
  onConfirmClick: () => void;
};

const LogoutConfirmationModal = ({
  isOpen,
  onClose,
  onConfirmClick,
}: LogoutConfirmationModalProps) => {
  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <StyledModalHeader>Would you like to logout?</StyledModalHeader>
      <HStack spacing="16px" wrap="wrap">
        <AppButton onClick={onConfirmClick} w="100%">
          YES
        </AppButton>
        <AppButton onClick={onClose} w="100%">
          NO
        </AppButton>
      </HStack>
    </AppModal>
  );
};

export default LogoutConfirmationModal;
