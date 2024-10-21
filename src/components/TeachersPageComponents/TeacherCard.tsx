import { type Teacher } from "../../redux/teachers/types";
import { HStack, Box, Spacer } from "@chakra-ui/react";
import TeacherAvatar from "./TeacherAvatar";
import ThickGrayText from "./ThickGrayText";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";
import TopDetails from "./TopDetails";
import { Text } from "@chakra-ui/react";
import TeacherMainInfo from "./TeacherMainInfo";

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
        <HStack
          justify="space-between"
          wrap="wrap"
          w={{ lg: "968px" }}
          mb="8px"
        >
          <ThickGrayText>Languages</ThickGrayText>
          <Spacer />
          <TopDetails
            rating={rating}
            price_per_hour={price_per_hour}
            lessons_done={lessons_done}
          />
          <UnstyledButton>
            <FiHeart size="26" />
          </UnstyledButton>
        </HStack>
        <Text
          fontSize="24px"
          fontWeight="medium"
          lineHeight="1"
          mb="32px"
        >{`${name}${surname}`}</Text>
        <TeacherMainInfo
          conditions={conditions}
          lesson_info={lesson_info}
          languages={languages}
        />
      </Box>
    </HStack>
  );
};

export default TeacherCard;
