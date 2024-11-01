import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";

const PricesFilter = () => {
  
  return (
    <FiltrationSelect
      options={pricesOptions}
      name="price"
      width="124px"
      labelText="Price"
    />
  );
};

export default PricesFilter;
