import { HStack, Text } from "@chakra-ui/react";
import { type Benefit } from "../../data/benefits";

type StyledBenefitsListItem = {
  benefit: Benefit;
};

const StyledBenefitsListItem = ({ benefit }: StyledBenefitsListItem) => {
  return (
    <HStack
      as="li"
      w={{ base: "100%", md: "auto", lg: "calc((100% - (100px * 3)) / 4)" }}
      gap="16px"
      justify="space-between"
      align="center"
    >
      <Text
        fontSize="28px"
        fontWeight="medium"
        lineHeight="1.2"
        whiteSpace="nowrap"
      >
        {benefit.number}
      </Text>
      <Text
        fontSize={{ base: "16px", md: "20px", lg: "16px" }}
        color="brand.black.400"
        lineHeight="1.3"
        textAlign={{ base: "right", lg: "left" }}
      >
        {benefit.item}
      </Text>
    </HStack>
  );
};

export default StyledBenefitsListItem;
