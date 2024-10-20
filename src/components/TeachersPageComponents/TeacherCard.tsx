import { type Teacher } from "../../redux/teachers/types";
import { HStack, Box } from "@chakra-ui/react";
import TeacherAvatar from "./TeacherAvatar";
import ThickBlackText from "./ThickBlackText";
import ThickGrayText from "./ThickGrayText";

type TeacherCardProps = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    avatar_url,
    lessons_done,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  return (
    <HStack
      as="li"
      w={{ base: "100%", lg: "1184px" }}
      minHeight="328px"
      bg="brand.white.900"
      p="24px"
      rounded="24px"
      wrap="wrap"
      justify="space-between"
      align="flex-start"
      spacing="48px"
    >
      <TeacherAvatar avatar_url={avatar_url} />
      <Box>
        <HStack justify="space-between" wrap="wrap">
          <ThickGrayText>Languages</ThickGrayText>
          <HStack wrap="wrap" spacing="32px">
            <p> TOP LIST</p>
          </HStack>
        </HStack>
      </Box>
    </HStack>
  );
};

export default TeacherCard;
