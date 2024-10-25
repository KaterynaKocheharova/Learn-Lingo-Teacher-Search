import AppButton from "../common/AppButton";
import AppModal from "../common/AppModal";
import { useDisclosure } from "@chakra-ui/react";
import BookingForm from "./BookingForm";

const BookLessonButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AppButton
        py="16px"
        px="48px"
        lineHeight="1.5"
        w="232px"
        h="60px"
        onClick={onOpen}
      >
        Book trial lesson
      </AppButton>
      <AppModal isOpen={isOpen} onClose={onClose}>
        <BookingForm />
      </AppModal>
    </>
  );
};

export default BookLessonButton;
