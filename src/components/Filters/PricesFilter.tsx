import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";
import { getOptions } from "../../utils/getOptions.ts";
import { filterOptions } from "../../utils/filterOptions.ts";

const PricesFilter = () => {
  const loadOptions = async (inputValue: string) => {
    const options = await getOptions("prices/");
    return filterOptions(inputValue, options);
  };

  return (
    <FiltrationSelect
      loadOptions={loadOptions}
      defaultOptions={pricesOptions}
      name="price"
      width="124px"
      labelText="Price"
    />
  );
};

export default PricesFilter;
