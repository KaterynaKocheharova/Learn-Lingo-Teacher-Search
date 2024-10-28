import FiltrationSelect from "./FiltrationSelect.tsx";
import { pricesOptions } from "../../data/options.ts";

const PricesFilter = () => {
  return <FiltrationSelect options={pricesOptions} name="prices" />;
};

export default PricesFilter;
