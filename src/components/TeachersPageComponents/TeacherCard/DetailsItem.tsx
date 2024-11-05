import { TextProps } from "@chakra-ui/react";
import ThickBlackText from "../../common/ThickBlackText";

type DetailsItemProps = {
  children: React.ReactNode;
  hasLine?: boolean;
} & Partial<TextProps>;

const DetailsItem = ({ children, hasLine = true }: DetailsItemProps) => {
  return (
    <ThickBlackText
      as="li"
      display="flex"
      gap="8px"
      alignItems="center"
      pos="relative"
      sx={
        hasLine
          ? {
              "&::after": {
                content: '""',
                pos: "absolute",
                right: "-16px",
                h: "16px",
                w: "1px",
                bg: "brand.gray.300",
              },
            }
          : {}
      }
    >
      {children}
    </ThickBlackText>
  );
};

export default DetailsItem;
