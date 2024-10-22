import { useCallback, useState } from "react";
import { type Teacher } from "../../redux/teachers/types";
import { HStack, Box, Spacer } from "@chakra-ui/react";
import TeacherAvatar from "./TeacherAvatar";
import ThickGrayText from "./ThickGrayText";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";
import TopDetails from "./TopDetails";
import { Text } from "@chakra-ui/react";
import TeacherMainInfo from "./TeacherMainInfo";
import ThickBlackText from "./ThickBlackText";
import Languages from "./Languages";
import ExtraTeacherInfo from "./ExtraTeacherInfo";

type TeacherCardProps = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  const [isFullInfoShown, setIsFullInfoShown] = useState(false);
  const toggleShowInfo = useCallback(() => {
    setIsFullInfoShown(!isFullInfoShown);
  }, [isFullInfoShown]);

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
      <Box w={{ lg: "968px" }}>
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
        <Languages levels={levels} />
      </Box>
    </HStack>
  );
};

export default TeacherCard;
