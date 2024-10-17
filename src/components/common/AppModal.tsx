import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalProps,
  ModalCloseButton,
} from "@chakra-ui/react";

const AppModal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        maxW={{ base: "300px", md: "566px" }}
        bg="brand.white.900"
        borderRadius="30px"
        p={{ base: "40px", md: "64px" }}
      >
        <ModalCloseButton
          w="32px"
          h="32px"
          top="20px"
          right="20px"
          _hover={{ bg: "brand.orange.400" }}
          _active={{ bg: "brand.orange.400" }}
          _focus={{ bg: "brand.orange.400" }}
        />
        {/* <AppButton
          width="32px"
          height="32px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="20px"
          right="20px"
          bg="transparent"
          padding="0"
          outline="none"
          border="none"
          _hover="brand.orange.400"
          _active="brand.orange.400"
          _focus="brand.orange.400"
          fill="brand.black.900"
          stroke="brand.black.900"
          onClick={onClose}
        >
          <svg width="32px" height="32px">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </AppButton> */}
        {children}
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
