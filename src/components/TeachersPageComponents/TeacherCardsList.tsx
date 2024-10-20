import { type Teachers } from "../../redux/teachers/types";
import { VStack } from "@chakra-ui/react";
import TeacherCard from "./TeacherCard";

type TeacherCardsListProps = {
  teachers: Teachers;
};

const TeacherCardsList = ({ teachers }: TeacherCardsListProps) => {
  return (
    <VStack
      as="ul"
      spacing="32px"
      align="center"
      justify="center"
      px={{ base: "16px", lg: "64px" }}
    >
      {teachers.map((teacher) => {
        return <TeacherCard key={teacher.id} teacher={teacher} />;
      })}
    </VStack>
  );
};

export default TeacherCardsList;
