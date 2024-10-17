import { Input } from "@chakra-ui/react";
import { type InputGroupProps } from "./InputGroup";

const StyledInput = ({
  name,
  register,
  placeholder,
  type,
  errorMessage,
  required,
  ...props
}: InputGroupProps) => {
  return (
    <Input
      variant="unstyled"
      {...register(name, { required })}
      placeholder={placeholder}
      type={type}
      {...props}
      errorBorderColor="red.300"
      w="100%"
      p="16px 18px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor={errorMessage ? "red.300" : "brand.gray.300"}
      borderRadius="12px"
      outline="unset"
      color="brand.black.900"
      _placeholder={{ color: "brand.black.900" }}
    />
  );
};

export default StyledInput;
