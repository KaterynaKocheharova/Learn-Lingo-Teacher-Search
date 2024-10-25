import { type LearningGoalRadios } from "./LearningGoalRadios";
import { useRadio, HStack } from "@chakra-ui/react";

type LearningGoalRadioProps = LearningGoalRadios & {
  value: string;
  label: string;
};

const LearningGoalRadio = ({
  checkedGoal,
  register,
  name,
  label,
  value,
}: LearningGoalRadioProps) => {
  const { getInputProps } = useRadio({
    value,
    name,
  });

  const input = getInputProps();

//   style everything now

  return (
    <HStack>
      <input
        {...input}
        {...register(name, { required: true })}
        checked={checkedGoal === input.value}
      />
    </HStack>
  );
};

export default LearningGoalRadio;
