import { useAppDispatch } from "../../redux/hooks.ts";
import { useAppSelector } from "../../redux/hooks.ts";
import {
  fetchFilteredTeachers,
  fetchTeachers,
} from "../../redux/teachers/operations.ts";
import { removeIsFilteredFlag } from "../../redux/teachers/slice.ts";
import { selectFilters } from "../../redux/filters/selectors.ts";
import { SelectIsFiltered } from "../../redux/teachers/selectros.ts";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";
import { getOptions } from "../../utils/getOptions.ts";
import { filterOptions } from "../../utils/filterOptions.ts";
import AppButton from "../common/AppButton.tsx";
import { HStack } from "@chakra-ui/react";

const PricesFilter = () => {
  const loadOptions = async (inputValue: string) => {
    const options = await getOptions("prices/");
    return filterOptions(inputValue, options);
  };

  const filters = useAppSelector(selectFilters);
  const isFiltered = useAppSelector(SelectIsFiltered);

  const dispatch = useAppDispatch();

  const onClick = () => {
    if (filters?.language || (filters?.from && filters?.to) || filters?.level) {
      dispatch(
        fetchFilteredTeachers({
          filters: {
            ...filters,
          },
        })
      );
    } else {
      dispatch(removeIsFilteredFlag());
      if (!isFiltered) {
        dispatch(
          fetchTeachers({
            isFirstBatch: true,
          })
        );
      }
    }
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
