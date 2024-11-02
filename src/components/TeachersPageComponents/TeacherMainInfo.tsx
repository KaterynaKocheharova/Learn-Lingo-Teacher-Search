import { VStack, HStack } from "@chakra-ui/react";
import { type Teacher } from "../../redux/teachers/types";
import { useMemo } from "react";
import ThickBlackText from "../common/ThickBlackText";
import ThickGrayText from "../common/ThickGrayText";

type TeacherMainInfoProps = Pick<
  Teacher,
  "lesson_info" | "languages" | "conditions"
>;

const TeacherMainInfo = ({
  lesson_info,
  languages,
  conditions,
}: TeacherMainInfoProps) => {
  const langArray = useMemo(() => Object.keys(languages), [languages]);
  return (
    <VStack
      as="ul"
      spacing={{ base: "24px", lg: "8px" }}
      align="flex-start"
      mb="16px"
    >
      {[
        { title: "Speaks", text: langArray },
        { title: "Lesson Info", text: lesson_info },
        { title: "Conditions", text: conditions },
      ].map(({ title, text }) => {
        return (
          <HStack spacing="8px" wrap="wrap">
            <ThickGrayText>{title}:</ThickGrayText>
            <ThickBlackText
              textDecoration={title === "Speaks" ? "underline" : "none"}
            >
              {title === "Speaks" ? (text as string[]).join(", ") : text}
            </ThickBlackText>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default TeacherMainInfo;
