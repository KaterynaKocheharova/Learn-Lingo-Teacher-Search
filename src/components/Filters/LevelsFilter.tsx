import { useAppDispatch } from "../../redux/hooks.ts";
import { fetchTeachers } from "../../redux/teachers/operations.ts";
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
  const onChange: SelectChangeHandler = useCallback(
    (option) => {
      dispatch(
        fetchTeachers({
          startKey: "0",
          isFirstBatch: true,
          filters: {
            level: option.value,
          },
          isFiltered: true
        })
      );
    },
    [dispatch]
  );

  return (
    <FiltrationSelect
      onChange={onChange}
      options={levelsOptions}
      name="language"
      width="198px"
      labelText="Level of knowledge"
    />
  );
};

export default LevelsFilter;
