import { Button, ButtonProps } from "@chakra-ui/react";

type UnstyledButton = {
  children: React.ReactNode;
} & Partial<ButtonProps>;

const UnstyledButton = ({ onClick, children, ...props }: UnstyledButton) => {
  return (
    <Button
      onClick={onClick}
      p="0"
      bg="transparent"
      border="none"
      _hover={{
        bg: "transparent",
        outline: "none",
        border: "none"
      }}
      _active={{
        bg: "transparent",
        outline: "none",
        border: "none"
      }}
      _focus={{
        bg: "transparent",
        outline: "none",
        border: "none"
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default UnstyledButton;
