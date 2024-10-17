import { useState } from "react";
import { Box } from "@chakra-ui/react";
import StyledInput from "../common/StyledInput";
import StyledFormError from "../common/StyledFormError";
import { type InputGroupProps } from "../common/InputGroup";
import { IconButton } from "@chakra-ui/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const PasswordGroup = ({
  name,
  register,
  placeholder,
  errorMessage,
  required,
  ...props
}: InputGroupProps) => {
  const [isPasswordOpen, setIsPasswordOpen] = useState(true);
  const handleClick = () => setIsPasswordOpen(!isPasswordOpen);

  return (
    <Box position="relative" w="100%">
      <StyledInput
        name={name}
        errorMessage={errorMessage}
        register={register}
        placeholder={placeholder}
        type={isPasswordOpen ? "text" : "password"}
        {...props}
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
