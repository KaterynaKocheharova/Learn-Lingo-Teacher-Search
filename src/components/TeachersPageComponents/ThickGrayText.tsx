import { Text, TextProps } from "@chakra-ui/react";



const ThickGrayText = ({ children, ...props }: Partial<TextProps>) => {
  return <Text fontWeight="medium" color="brand.gray.400" {...props}>{children}</Text>;
};

export default ThickGrayText;
