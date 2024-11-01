import { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import StyledInput from "../FormsReusableComponents/StyledInput";
import StyledFormError from "../FormsReusableComponents/StyledFormError";

import { type InputGroupProps } from "../FormsReusableComponents/InputGroup";

type PasswordGroupProps = Omit<InputGroupProps, "name" | "placeholder">;

const PasswordGroup = ({
  register,
  errorMessage,
  ...props
}: PasswordGroupProps) => {
  const [isPasswordOpen, setIsPasswordOpen] = useState(true);
  const handleClick = () => setIsPasswordOpen(!isPasswordOpen);

  return (
    <Box position="relative" w="100%">
      <StyledInput
        errorMessage={errorMessage}
        register={register}
        placeholder="Password"
        type={isPasswordOpen ? "text" : "password"}
        {...props}
        name="password"
      />
      <IconButton
        variant="unstyled"
        aria-label="toggle password eye button"
        onClick={handleClick}
        width="18px"
        height="18px"
        display="inline-block"
        padding="unset"
        minW="unset"
        borderRadius="unset"
        icon={
          isPasswordOpen ? (
            <IoEyeOutline size="18px" />
          ) : (
            <IoEyeOffOutline size="18px" />
          )
        }
        position="absolute"
        right="18px"
        top="50%"
        transform="translateY(-50%)"
      ></IconButton>
      <StyledFormError errorMessage={errorMessage} />
    </Box>
  );
};

export default PasswordGroup;
