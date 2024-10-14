import { Button, ButtonProps } from "@chakra-ui/react";

type AppButtonProps = Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> &
  Partial<ButtonProps> & {
    children: React.ReactNode;
  };

const AppButton = ({ children, ...props }: AppButtonProps) => {
  return (
    <Button
      py="14px"
      borderRadius="12px"
      color="brand.black.900"
      fontWeight="bold"
      fontSize="md"
      backgroundColor="brand.orange.900"
      _hover={{ bg: "brand.orange.900", color: "brand.black.900" }}
      _focus={{ bg: "brand.orange.900", color: "brand.black.900" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AppButton;
