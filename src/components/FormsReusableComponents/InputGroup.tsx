import {  Box } from "@chakra-ui/react";
import StyledInput from "./StyledInput";
import StyledFormError from "./StyledFormError";
import { type StyledInputProps } from "./StyledInput";

export type InputGroupProps = StyledInputProps;

const InputGroup = ({
  name,
  register,
  placeholder,
  type,
  errorMessage,
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
