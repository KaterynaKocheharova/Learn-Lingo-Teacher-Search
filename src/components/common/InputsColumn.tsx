import { VStack } from "@chakra-ui/react";

type InputsColumnProps = {
  children: React.ReactNode;
};

const InputsColumn = ({ children }: InputsColumnProps) => {
  return <VStack spacing="18px">{children}</VStack>;
};

export default InputsColumn;
