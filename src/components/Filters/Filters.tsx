import { HStack } from "@chakra-ui/react";
import LanguageFilter from "./LanguageFilter";
import PricesFilter from "./PricesFilter";
import LevelsFilter from "./LevelsFilter";

const Filters = () => {
  return (
    <HStack spacing="20px" wrap="wrap" mb="32px">
      <LanguageFilter />
      <LevelsFilter />
      <PricesFilter />
    </HStack>
  );
};

export default Filters;
