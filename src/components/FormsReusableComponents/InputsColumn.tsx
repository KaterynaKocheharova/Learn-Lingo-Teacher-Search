import { VStack, StackProps } from "@chakra-ui/react";

type InputsColumnProps = {
  children: React.ReactNode;
} & Partial<StackProps>;

const InputsColumn = ({ children, ...props }: InputsColumnProps) => {
  return (
    <VStack spacing="18px" mb="40px" {...props}>
      {children}
    </VStack>
  );
};

export default InputsColumn;
