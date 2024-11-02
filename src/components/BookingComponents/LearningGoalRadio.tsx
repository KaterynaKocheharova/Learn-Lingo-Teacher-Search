import { useRadio, HStack, Text } from "@chakra-ui/react";

import { type LearningGoalRadiosProps } from "./LearningGoalRadios";

type LearningGoalRadioProps = LearningGoalRadiosProps & {
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

  return (
    <HStack as="label" spacing="8px" cursor="pointer">
      <input
        {...input}
        {...register(name, {
          required: true,
        })}
        type="radio"
        checked={checkedGoal === input.value}
      />
      <svg
        width="24"
        height="24"
        style={
          checkedGoal !== input.value
            ? {
                fill: "none",
                stroke: "#12141733",
              }
            : {}
        }
      >
        <use
          href={
            checkedGoal === input.value
              ? "/sprite.svg#icon-radio-checked"
              : "/sprite.svg#icon-radio-init"
          }
        ></use>
      </svg>
      <Text>{label}</Text>
    </HStack>
  );
};

export default LearningGoalRadio;
