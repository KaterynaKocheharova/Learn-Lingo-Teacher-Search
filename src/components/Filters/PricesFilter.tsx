import { useFilters } from "../../hooks/useFilters.ts";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";
import { getOptions } from "../../utils/getOptions.ts";
import { filterOptions } from "../../utils/filterOptions.ts";
import AppButton from "../common/AppButton.tsx";
import { HStack } from "@chakra-ui/react";

const PricesFilter = () => {
  const {applyFilters} = useFilters();

  const loadOptions = async (inputValue: string) => {
    const options = await getOptions("prices/");
    return filterOptions(inputValue, options);
  };

  const onClick = () => {
  applyFilters()
  };

  return (
    <HStack p="10px" bg="brand.gray.300" borderRadius="4px" wrap="wrap">
      <FiltrationSelect
        loadOptions={loadOptions}
        defaultOptions={pricesOptions}
        name="from"
        width="124px"
        labelText="Min Price"
      />
      <FiltrationSelect
        loadOptions={loadOptions}
        defaultOptions={pricesOptions}
        name="to"
        width="124px"
        labelText="Max Price"
      />
      <AppButton alignSelf="flex-end" onClick={onClick}>
        OK
      </AppButton>
    </HStack>
  );
};

export default PricesFilter;
