import { useState, useEffect } from "react";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { type Options } from "../../data/options.ts";
import { getOptions } from "../../utils/getOptions.ts";

const LanguageFilter = () => {
  const [options, setOptions] = useState<Options>([]);

  useEffect(() => {
    const getLanguagesOptions = async () => {
      const options = await getOptions("languages/");
      if (options) {
        setOptions(options);
      }
    };

    getLanguagesOptions();
  }, []);

  return (
    <FiltrationSelect
      options={options}
      name="language"
      width="221px"
      labelText="Languages"
    />
  );
};

export default LanguageFilter;
