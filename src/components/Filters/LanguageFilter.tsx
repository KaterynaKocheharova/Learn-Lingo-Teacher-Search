import { ref, get } from "firebase/database";
import { teachersDB } from "../../config/firebase.js";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { useEffect, useState } from "react";
import { type Options } from "../../data/options.ts";

export const getLangugesOptions = async (): Promise<Options | undefined> => {
  try {
    const languagesRef = ref(teachersDB, "languages/");
    const languagesSnapshot = await get(languagesRef);
    const langaugesOptions = languagesSnapshot.val().map((language: string) => {
      return { value: language, label: language };
    });
    return langaugesOptions;
  } catch (error) {
    console.log(error);
  }
};

const LanguageFilter = () => {
  const [options, setOptions] = useState<Options>([]);

  useEffect(() => {
    const getOptions = async () => {
      const options = await getLangugesOptions();
      if (options) {
        setOptions(options);
      }
    };

    getOptions();
  }, []);
  return (
    <FiltrationSelect
      options={options}
      name="languages"
      width="221px"
      labelText="Languages"
    />
  );
};

export default LanguageFilter;
