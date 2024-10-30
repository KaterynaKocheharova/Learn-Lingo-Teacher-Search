import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks.ts";
import { fetchTeachers } from "../../redux/teachers/operations.ts";
import { SelectChangeHandler } from "./FiltrationSelect.tsx";

import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";

const PricesFilter = () => {
  const dispatch = useAppDispatch();
  const onChange: SelectChangeHandler = useCallback(
    (option) => {
      dispatch(
        fetchTeachers({
          startKey: "0",
          isFirstBatch: true,
          filters: {
            price: option.value,
          },
        })
      );
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
