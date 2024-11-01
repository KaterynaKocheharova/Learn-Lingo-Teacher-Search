import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { fetchFilteredTeachers } from "../../redux/teachers/operations.ts";
import { selectFilters } from "../../redux/filters/selectors.ts";
import { addFilter } from "../../redux/filters/slice.ts";
import { useCallback } from "react";
import { ref, get } from "firebase/database";
import { teachersDB } from "../../config/firebase.js";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { roundDownToNearestTen } from "../../utils/roundToTheNearestTen";
import { levelsOptions } from "../../data/options.ts";
import { SelectChangeHandler } from "./FiltrationSelect.tsx";

export const getPricesOptions = async () => {
  try {
    const pricesRef = ref(teachersDB, "prices/");
    const pricesSnapshot = await get(pricesRef);
    const pricesOptions = pricesSnapshot.val().map((price: string) => {
      const optionsFormatedPrice = roundDownToNearestTen(Number(price));
      return {
        value: optionsFormatedPrice,
        label: `${optionsFormatedPrice} $`,
      };
    });
    return pricesOptions;
  } catch (error) {
    console.log(error);
  }
};

const LevelsFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  const onChange: SelectChangeHandler = useCallback(
    (option) => {
      dispatch(addFilter({ filters: { level: option.value } }));

      dispatch(
        fetchFilteredTeachers({
          filters: {
            ...filters,
            level: option.value,
          },
        })
      );
    },
    [dispatch, filters]
  );

  return (
    <FiltrationSelect
      onChange={onChange}
      options={levelsOptions}
      name="level"
      width="198px"
      labelText="Level of knowledge"
    />
  );
};

export default LevelsFilter;
