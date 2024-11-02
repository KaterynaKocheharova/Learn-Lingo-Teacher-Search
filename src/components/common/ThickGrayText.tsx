import { Text, TextProps } from "@chakra-ui/react";

type ThickGrayTextProps = Partial<TextProps>;

const ThickGrayText = ({ children, ...props }: ThickGrayTextProps) => {
  return (
    <Text fontWeight="medium" color="brand.gray.400" {...props}>
      {children}
    </Text>
  );
};

export default ThickGrayText;
