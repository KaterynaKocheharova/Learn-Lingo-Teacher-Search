import { InputProps, Box } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { type RegisterInputValues } from "../Auth/types";
import StyledInput from "./StyledInput";
import StyledFormError from "./StyledFormError";

export type InputGroupProps = Partial<InputProps> &
  Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
    errorMessage: string | undefined;
    register: UseFormRegister<RegisterInputValues>;
    name: keyof RegisterInputValues;
  };

const InputGroup = ({
  name,
  register,
  placeholder,
  type,
  errorMessage,
  required,
  ...props
}: InputGroupProps) => {
  return (
    <Box position="relative" w="100%">
      <StyledInput
        name={name}
        errorMessage={errorMessage}
        register={register}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      <StyledFormError errorMessage={errorMessage} />
    </Box>
  );
};

export default InputGroup;
