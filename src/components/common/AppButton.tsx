import { Button, ButtonProps } from "@chakra-ui/react";

type AppButtonProps = Partial<ButtonProps> & {
  children: React.ReactNode | string;
};

const AppButton = ({ children, onClick, ...props }: AppButtonProps) => {
  return (
    <Button
      onClick={onClick}
      py="14px"
      borderRadius="12px"
      color="brand.black.900"
      fontWeight="bold"
      fontSize="md"
      backgroundColor="brand.orange.900"
      _hover={{
        bg: "brand.orange.800",
        color: "brand.black.900",
        border: "none",
      }}
      _focus={{
        bg: "brand.orange.800",
        color: "brand.black.900",
        border: "none",
        outline: "none",
      }}
      _active={{
        bg: "brand.orange.800",
        color: "brand.black.900",
        border: "none",
        outiline: "none",
      }}
      {...props}
      line-height="1.5"
    >
      {children}
    </Button>
  );
};

export default AppButton;
