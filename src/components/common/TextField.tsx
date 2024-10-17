import { Input, InputProps, Box, Text } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { type RegisterInputValues } from "../Auth/types";

type TextFieldProps = Partial<InputProps> &
  Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
    errorMessage: string | undefined;
    register: UseFormRegister<RegisterInputValues>;
    name: keyof RegisterInputValues;
  };

const TextField = ({
  name,
  register,
  placeholder,
  type,
  errorMessage,
  required,
  ...props
}: TextFieldProps) => {
  return (
    <Box position="relative">
      <Input
        {...register(name, { required })}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {errorMessage && (
        <Text fontSize="14px" position="absolute" top="0" left="0">
          {errorMessage}
        </Text>
      )}
    </Box>
    // add eye
  );
};

export default TextField;
