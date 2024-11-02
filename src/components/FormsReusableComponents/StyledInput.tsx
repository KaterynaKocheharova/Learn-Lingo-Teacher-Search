import { Input, InputProps } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { type RegisterInputValues, LoginInputValues } from "../Auth/types";
import { type BookingValues } from "../BookingComponents/BookingForm";
import { type Names } from "./types";

export type StyledInputProps = Partial<InputProps> & {
  errorMessage: string | undefined;
  register:
    | UseFormRegister<RegisterInputValues>
    | UseFormRegister<LoginInputValues>
    | UseFormRegister<BookingValues>;
  name: Names;
};

const StyledInput = ({
  name,
  register,
  placeholder,
  type,
  errorMessage,
  ...props
}: StyledInputProps) => {
  return (
    <Input
      variant="unstyled"
      {...register(name, { required: true })}
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


