import FiltrationSelect from "./FiltrationSelect.tsx";
import { levelsOptions } from "../../data/options.ts";

const LevelsFilter = () => {
  return (
    <FiltrationSelect
      options={levelsOptions}
      name="level"
      width="198px"
      labelText="Level of knowledge"
    />
  );
};

export default LevelsFilter;
