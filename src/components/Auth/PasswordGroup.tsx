import { useState } from "react";
import { Box } from "@chakra-ui/react";
import StyledInput from "../common/StyledInput";
import StyledFormError from "../common/StyledFormError";
import { type InputGroupProps } from "../common/InputGroup";
import { IconButton } from "@chakra-ui/react";

const PasswordGroup = ({
  name,
  register,
  placeholder,
  errorMessage,
  required,
  ...props
}: InputGroupProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box position="relative" w="100%">
      <StyledInput
        name={name}
        errorMessage={errorMessage}
        register={register}
        placeholder={placeholder}
        type={show ? "password" : "text"}
        {...props}
      />
      <IconButton aria-label="toggle password eye button" onClick={handleClick}>
        <p>Icon button</p>
      </IconButton>
      <StyledFormError errorMessage={errorMessage} />
    </Box>
  );
};

export default PasswordGroup;
