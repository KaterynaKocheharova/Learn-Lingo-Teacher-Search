import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalProps,
  ModalCloseButton,
} from "@chakra-ui/react";

type AppModalProps = ModalProps;

const AppModal = ({ isOpen, onClose, children }: AppModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        mx="15px"
        maxW={{ md: "566px" }}
        bg="brand.white.900"
        borderRadius="30px"
        p={{ base: "30px", md: "64px" }}
        maxH="99%"
        overflow="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <ModalCloseButton
          w="32px"
          h="32px"
          top={{ base: "10px", md: "20px" }}
          right="20px"
          _hover={{ bg: "brand.orange.400" }}
          _active={{ bg: "brand.orange.400" }}
          _focus={{ bg: "brand.orange.400" }}
        />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
