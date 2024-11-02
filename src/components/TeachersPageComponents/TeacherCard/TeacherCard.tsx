import { useCallback, useState } from "react";

import { HStack, Box, Spacer, Text } from "@chakra-ui/react";

import TeacherAvatar from "./TeacherAvatar";
import ThickGrayText from "../../common/ThickGrayText";
import TopDetails from "./TopDetails";
import UnstyledButton from "../../common/UnstyledButton";
import TeacherMainInfo from "./TeacherMainInfo";
import ThickBlackText from "../../common/ThickBlackText";
import Levels from "./Levels";
import ExtraTeacherInfo from "./ExtraTeacherInfo";
import AddToFavoritesButton from "./AddToFavoritesButton";
import BookLessonButton from "../../BookingComponents/BookLessonButton";

import { type Teacher } from "../../../redux/teachers/types";

type TeacherCardProps = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: TeacherCardProps) => {

  const [isFullInfoShown, setIsFullInfoShown] = useState(false);
  
  const toggleShowInfo = useCallback(() => {
    setIsFullInfoShown(!isFullInfoShown);
  }, [isFullInfoShown]);

  const {
    id,
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
      pos="relative"
      w={{ base: "100%", lg: "1184px" }}
      bg="brand.white.900"
      p="24px"
      rounded="24px"
      wrap="wrap"
      justify="space-between"
      align="flex-start"
      spacing="48px"
    >
      <TeacherAvatar avatar_url={avatar_url} />
      <Box w={{ base: "100%", lg: "968px" }}>
        <HStack
          justify="space-between"
          wrap="wrap"
          w={{ lg: "968px" }}
          mb={{ base: "32px", lg: "8px" }}
        >
          <ThickGrayText mb={{ base: "24px", md: "unset" }}>
            Languages
          </ThickGrayText>
          <Spacer />
          <TopDetails
            rating={rating}
            price_per_hour={price_per_hour}
            lessons_done={lessons_done}
          />
        </HStack>
        <Text
          fontSize="24px"
          fontWeight="medium"
          lineHeight="1"
          mb="32px"
        >{`${name} ${surname}`}</Text>
        <TeacherMainInfo
          conditions={conditions}
          lesson_info={lesson_info}
          languages={languages}
        />
        {!isFullInfoShown && (
          <UnstyledButton onClick={toggleShowInfo} mb="32px">
            <ThickBlackText textDecoration="underline">
              Read more
            </ThickBlackText>
          </UnstyledButton>
        )}
        {isFullInfoShown && (
          <ExtraTeacherInfo reviews={reviews} experience={experience} />
        )}
        <Levels levels={levels} />
        <BookLessonButton
          name={name}
          surname={surname}
          avatar_url={avatar_url}
        />
      </Box>
      <AddToFavoritesButton id={id} />
    </HStack>
  );
};

export default TeacherCard;
