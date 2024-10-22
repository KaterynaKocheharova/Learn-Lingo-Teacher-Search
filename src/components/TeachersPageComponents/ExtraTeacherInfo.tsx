import ReviewsList from "./ReviewsList";
import { Box, Text } from "@chakra-ui/react";
import { type Teacher } from "../../redux/teachers/types";

type ExtraTeacherInfoProps = Pick<Teacher, "experience" | "reviews">;

const ExtraTeacherInfo = ({ experience, reviews }: ExtraTeacherInfoProps) => {
  return (
    <Box mb="32px">
      <Text mb="32px">{experience}</Text>
      <ReviewsList reviews={reviews} />
    </Box>
  );
};

export default ExtraTeacherInfo;
