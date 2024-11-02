import { Text, TextProps } from "@chakra-ui/react";

type ThickBlackTextProps = Partial<TextProps>;

const ThickBlackText = ({ children, ...props }: ThickBlackTextProps) => {
  return (
    <Text fontWeight="medium" {...props}>
      {children}
    </Text>
  );
};

export default ThickBlackText;
