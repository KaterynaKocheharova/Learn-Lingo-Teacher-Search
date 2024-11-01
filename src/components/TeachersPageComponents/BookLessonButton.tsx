import AppButton from "../common/AppButton";
import AppModal from "../ModalReusableComponents/AppModal";
import { useDisclosure } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import { type Teacher } from "../../redux/teachers/types";

type BookLessonButtonProps = Pick<Teacher, "name" | "surname" | "avatar_url">;

const BookLessonButton = ({
  name,
  surname,
  avatar_url,
}: BookLessonButtonProps) => {
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
        <BookingForm name={name} surname={surname} avatar_url={avatar_url} onClose={onClose} />
      </AppModal>
    </>
  );
};

export default BookLessonButton;
