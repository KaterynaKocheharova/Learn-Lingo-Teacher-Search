import { HStack, Text } from "@chakra-ui/react";
import { type Benefit } from "../../../utils/benefits";

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
        as="li"
        fontSize="28px"
        fontWeight="medium"
        lineHeight="1.2"
        whiteSpace="nowrap"
      >
        {benefit.number}
      </Text>
      <Text as="li" fontSize="14px" color="brand.black.400" lineHeight="1.3">
        {benefit.item}
      </Text>
    </HStack>
  );
};

export default StyledBenefitsListItem;
