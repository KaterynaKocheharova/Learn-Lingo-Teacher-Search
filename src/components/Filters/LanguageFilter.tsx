import FiltrationSelect from "./FiltrationSelect.tsx";
import { getOptions } from "../../utils/getOptions.ts";
import { filterOptions } from "../../utils/filterOptions.ts";

const LanguageFilter = () => {
  const loadOptions = async (inputValue: string) => {
    const options = await getOptions("languages/");
    return filterOptions(inputValue, options);
  };

  return (
    <FiltrationSelect
      loadOptions={loadOptions}
      name="language"
      width="221px"
      labelText="Languages"
    />
  );
};

export default LanguageFilter;
