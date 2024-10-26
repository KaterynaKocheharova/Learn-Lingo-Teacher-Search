import { InputProps, Box } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { type RegisterInputValues, LoginInputValues } from "../Auth/types";
import { type BookingValues } from "../TeachersPageComponents/BookingForm";
import StyledInput from "./StyledInput";

import StyledFormError from "./StyledFormError";

export type InputGroupProps = Partial<InputProps> &
  Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
    errorMessage: string | undefined;
    register:
      | UseFormRegister<RegisterInputValues>
      | UseFormRegister<LoginInputValues> | UseFormRegister<BookingValues>;
    name: keyof RegisterInputValues | keyof BookingValues;
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
