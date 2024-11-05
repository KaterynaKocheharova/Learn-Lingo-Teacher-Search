import FiltrationSelect from "./FiltrationSelect.tsx";
import { levelsOptions } from "../../data/options.ts";
import { filterOptions } from "../../utils/filterOptions.ts";

const LevelsFilter = () => {
  
  const loadOptions = async (inputValue: string) => {
    const options = levelsOptions;
    return filterOptions(inputValue, options);
  };

  return (
    <FiltrationSelect
      loadOptions={loadOptions}
      defaultOptions={levelsOptions}
      name="level"
      width="198px"
      labelText="Level of knowledge"
    />
  );
};

export default LevelsFilter;
