import { VStack } from "@chakra-ui/react";
import LanguageFilter from "./LanguageFilter";
import PricesFilter from "./PricesFilter";
import LevelsFilter from "./LevelsFilter";

const Filters = () => {
  return (
    <VStack spacing="20px" wrap="wrap" mb="32px">
      <LanguageFilter />
      <LevelsFilter />
      <PricesFilter />
    </VStack>
  );
};

export default Filters;
