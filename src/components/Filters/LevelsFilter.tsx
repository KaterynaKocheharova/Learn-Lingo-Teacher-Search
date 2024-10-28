import { ref, get } from "firebase/database";
import { teachersDB } from "../../config/firebase.js";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { roundDownToNearestTen } from "../../utils/roundToTheNearestTen";
import { levelsOptions } from "../../data/options.ts";

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
  return <FiltrationSelect options={levelsOptions} name="language" width="198px" />;
};

export default LevelsFilter;
