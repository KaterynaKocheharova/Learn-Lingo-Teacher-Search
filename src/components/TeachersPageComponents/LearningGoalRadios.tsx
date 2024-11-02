import { Text, VStack, Box } from "@chakra-ui/react";
import { learningGoals } from "../../utils/learningGoals";
import { type UseFormRegister } from "react-hook-form";
import { type BookingValues } from "../BookingComponents/BookingForm";
import LearningGoalRadio from "./LearningGoalRadio";

export type LearningGoalRadios = {
  register: UseFormRegister<BookingValues>;
  checkedGoal: "business" | "kids" | "abroad" | "study" | "travel";
  name: "name" | "email" | "number" | "learningGoal";
};

const LearningGoalRadios = ({
  register,
  name,
  checkedGoal,
}: LearningGoalRadios) => {
  return (
    <Box mb="40px">
      <Text fontSize="24px" mb="20px">
        What is your main reason for learning English?
      </Text>
      <VStack spacing="16px" align="flex-start">
        {learningGoals.map((goal) => (
          <LearningGoalRadio
            key={goal.fieldValue}
            checkedGoal={checkedGoal}
            register={register}
            name={name}
            label={goal.goal}
            value={goal.fieldValue}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default LearningGoalRadios;
