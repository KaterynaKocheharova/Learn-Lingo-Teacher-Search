import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks.ts";
import { fetchTeachers } from "../../redux/teachers/operations.ts";
import { SelectChangeHandler } from "./FiltrationSelect.tsx";
import { type Option } from "../../data/options.ts";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";

const PricesFilter = () => {
  const dispatch = useAppDispatch();

  const onChange: SelectChangeHandler = useCallback(
    (option: Option) => {
      if (option.value) {
        dispatch(
          fetchTeachers({
            startKey: "0",
            filters: {
              price: option.value,
            },
            isFirstBatch: true,
          })
        );
      }
    },
    [dispatch]
  );

  return (
    <FiltrationSelect
      onChange={onChange}
      options={pricesOptions}
      name="prices"
      width="124px"
      labelText="Price"
    />
  );
};

export default PricesFilter;
