import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectFilters } from "../../redux/filters/selectors.ts";
import { addFilter } from "../../redux/filters/slice.ts";
import { fetchFilteredTeachers } from "../../redux/teachers/operations.ts";
import { SelectChangeHandler } from "./FiltrationSelect.tsx";
import { type Option } from "../../data/options.ts";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";

const PricesFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  const onChange: SelectChangeHandler = useCallback(
    (option: Option) => {
      dispatch(addFilter({ filters: { price: option.value } }));
      dispatch(
        fetchFilteredTeachers({
          filters: {
            ...filters,
            price: option.value,
          },
        })
      );
    },
    [dispatch, filters]
  );

  return (
    <FiltrationSelect
      onChange={onChange}
      options={pricesOptions}
      name="price"
      width="124px"
      labelText="Bottom margin + 5"
    />
  );
};

export default PricesFilter;
