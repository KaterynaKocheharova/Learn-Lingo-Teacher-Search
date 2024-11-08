import { useFilters } from "../../hooks/useFilters.ts";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";
import { getOptions } from "../../utils/getOptions.ts";
import { filterPricesOptions } from "../../utils/filterOptions.ts";
import AppButton from "../common/AppButton.tsx";
import { HStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { toastConfigs } from "../../config/toast.ts";

const PricesFilter = () => {
  const { applyFilters, filters } = useFilters();

  const toast = useToast();

  const loadOptions = async (inputValue: string) => {
    const options = await getOptions("prices/");
    return filterPricesOptions(inputValue, options);
  };

  const onClick = () => {
    if ((filters.from && !filters.to) || (!filters.from && filters.to)) {
      toast({
        ...toastConfigs,
        status: "error",
        description: "Choose both min and max prices",
      });
      return;
    }
    applyFilters();
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
