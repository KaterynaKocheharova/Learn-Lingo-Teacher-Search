import { type Teacher } from "../../redux/teachers/types";
import { HStack, Box } from "@chakra-ui/react";
import TeacherAvatar from "./TeacherAvatar";

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
    <Box as="li">
      <TeacherAvatar avatar_url={avatar_url} name={name} surname={surname}/>
    </Box>
  );
};

export default TeacherCard;
