import { useAppDispatch } from "../../redux/hooks.ts";
import { fetchTeachers } from "../../redux/teachers/operations.ts";
import { ref, get } from "firebase/database";
import { teachersDB } from "../../config/firebase.js";
import FiltrationSelect from "./FiltrationSelect.tsx";
import { useCallback, useEffect, useState } from "react";
import { type Options, Option } from "../../data/options.ts";
import { type SelectChangeHandler } from "./FiltrationSelect.tsx";

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
  const dispatch = useAppDispatch();

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

  const onChange: SelectChangeHandler = useCallback(
    (option) => {
      dispatch(
        fetchTeachers({
          startKey: "0",
          isFirstBatch: true,
          filters: {
            language: option.value,
          },
          isFiltered: true
        })
      );
    },
    [dispatch]
  );

  return (
    <FiltrationSelect
      onChange={onChange}
      options={options}
      name="languages"
      width="221px"
      labelText="Languages"
    />
  );
};

export default LanguageFilter;
