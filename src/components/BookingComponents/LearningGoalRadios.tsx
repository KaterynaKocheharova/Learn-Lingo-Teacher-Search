import { Text, VStack, Box } from "@chakra-ui/react";
import LearningGoalRadio from "../BookingComponents/LearningGoalRadio";

import { learningGoals } from "../../data/learningGoals";

import { type UseFormRegister } from "react-hook-form";
import {
  type BookingValues,
  LearningGoal,
} from "../BookingComponents/BookingForm";

export type LearningGoalRadiosProps = {
  register: UseFormRegister<BookingValues>;
  checkedGoal: LearningGoal;
  name: "learningGoal";
};

const LearningGoalRadios = ({
  register,
  name,
  checkedGoal,
}: LearningGoalRadiosProps) => {
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
