import { Text, TextProps } from "@chakra-ui/react";

const ThickBlackText = ({ children, ...props }: Partial<TextProps>) => {
  return (
    <Text fontWeight="medium" {...props}>
      {children}
    </Text>
  );
};

export default ThickBlackText;
