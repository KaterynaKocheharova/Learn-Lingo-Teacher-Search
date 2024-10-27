import { ref, get } from "firebase/database";
import { teachersDB } from "../../config/firebase.js";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { useEffect, useState } from "react";
import { type Options } from "../../data/options.ts";
import { roundDownToNearestTen } from "../../utils/roundToTheNearestTen";

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

const PricesFilter = () => {
  const [options, setOptions] = useState<Options>([]);

  useEffect(() => {
    const getOptions = async () => {
      const options = await getPricesOptions();
      if (options) {
        setOptions(options);
      }
    };

    getOptions();
  });
  return <FiltrationSelect options={options} name="prices" />;
};

export default PricesFilter;
