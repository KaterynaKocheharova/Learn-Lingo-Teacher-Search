import { type Teacher } from "../../redux/teachers/types";
import { HStack, Box, Spacer } from "@chakra-ui/react";
import TeacherAvatar from "./TeacherAvatar";
import ThickBlackText from "./ThickBlackText";
import ThickGrayText from "./ThickGrayText";
import { LuBookOpen } from "react-icons/lu";
import DetailsItem from "./DetailsItem";
import { FiHeart } from "react-icons/fi";
import UnstyledButton from "../common/UnstyledButton";

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
          <Spacer />
          <HStack as="ul" wrap="wrap" spacing="32px" mr="64px">
            <DetailsItem>
              <LuBookOpen width="16px" height="16px" />
              Lessons online
            </DetailsItem>
            <DetailsItem>{` Lessons done: ${lessons_done}`}</DetailsItem>
            <DetailsItem>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-star"></use>
              </svg>
              {` Rating: 4.8: ${rating}`}
            </DetailsItem>
            <DetailsItem hasLine={false}>
              Price / 1 hour{" "}
              <ThickBlackText color="green.400">
                {price_per_hour}$
              </ThickBlackText>
            </DetailsItem>
          </HStack>
          <UnstyledButton>
            <FiHeart size="26" />
          </UnstyledButton>
        </HStack>
      </Box>
    </HStack>
  );
};

export default TeacherCard;
