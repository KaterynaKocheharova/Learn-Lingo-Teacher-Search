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
    <Box position="relative" w="100%">
      <Input
        variant="unstyled"
        {...register(name, { required })}
        placeholder={placeholder}
        type={type}
        {...props}
        w="100%"
        p="16px 18px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="brand.gray.300"
        borderRadius="12px"
        outline="unset"
        _focus={{ borderColor: "brand.orange.800", outline: "unset" }}
        color="brand.black.900"
        _placeholder={{ color: "brand.black.900" }}
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
