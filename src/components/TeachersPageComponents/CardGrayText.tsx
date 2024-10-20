import { Text, TextProps } from "@chakra-ui/react";

type CardGrayText = {
  children: React.ReactNode;
} & Partial<TextProps>;

const CardGrayText = ({ children, ...props }: CardGrayText) => {
  return <Text fontWeight="medium" color="brand.gray.400" {...props}></Text>;
};

export default CardGrayText;
