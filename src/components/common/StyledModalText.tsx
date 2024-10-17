import { Text, TextProps } from "@chakra-ui/react";

type StyledModalTextProps = {
  children: React.ReactNode;
} & Partial<TextProps>;

const StyledModalText = ({ children, ...props }: StyledModalTextProps) => {
  return (
    <Text color="brand.black.400" {...props}>
      {children}
    </Text>
  );
};

export default StyledModalText;
