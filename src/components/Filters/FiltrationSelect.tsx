import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectFilters } from "../../redux/filters/selectors.ts";
import { addFilter } from "../../redux/filters/slice.ts";
import { clearFilter } from "../../redux/filters/slice.ts";
import AsyncSelect from "react-select/async";
import { ActionMeta, SingleValue } from "react-select";
import { VStack } from "@chakra-ui/react";
import ThickGrayText from "../common/ThickGrayText.tsx";
import { type Option } from "../../data/options";
import css from "./select.module.css";
import { getSelectStyles } from "./selectStyles";
import {
  fetchFilteredTeachers,
  fetchTeachers,
} from "../../redux/teachers/operations.ts";
import { removeIsFilteredFlag } from "../../redux/teachers/slice.ts";
import { SelectIsFiltered } from "../../redux/teachers/selectros.ts";
import { type Options } from "../../data/options";

type FilterationSelectProps = {
  name: "language" | "level" | "price";
  width: string;
  labelText: string;
  defaultOptions?: Options;
  loadOptions: (inputValue: string) => Promise<Options>;
};

const FiltrationSelect = ({
  defaultOptions,
  loadOptions,
  name,
  width,
  labelText,
}: FilterationSelectProps) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const isFiltered = useAppSelector(SelectIsFiltered);
  const [selectedValue, setSelectedValue] =
    useState<SingleValue<Option> | null>(null);

  const onChange = useCallback(
    (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
      setSelectedValue(newValue);
      if (!newValue) {
        dispatch(clearFilter(name));
      } else if (newValue.hasOwnProperty("value")) {
        dispatch(
          addFilter({
            filters: {
              [name]: newValue.value,
            },
          })
        );
      }
    },
    [dispatch, name]
  );

  useEffect(() => {
    if (filters?.language || filters?.price || filters?.level) {
      dispatch(
        fetchFilteredTeachers({
          filters: {
            ...filters,
          },
        })
      );
    } else {
      dispatch(removeIsFilteredFlag());
      if (!isFiltered) {
        dispatch(
          fetchTeachers({
            isFirstBatch: true,
          })
        );
      }
    }
  }, [filters, isFiltered]);

  return (
    <VStack spacing="8px" align="flex-start">
      <ThickGrayText fontSize="14px" id="filter teachers label">
        {labelText}
      </ThickGrayText>
      <AsyncSelect
        value={selectedValue}
        cacheOptions
        defaultOptions={defaultOptions || true}
        loadOptions={loadOptions}
        placeholder={name}
        pageSize={2}
        blurInputOnSelect={true}
        aria-labelledby="filter teachers label"
        aria-label="Filtrating teachers dropdown"
        isClearable={true}
        onChange={onChange}
        defaultValue={{ value: "", label: name }}
        unstyled
        styles={getSelectStyles(width)}
        classNames={{
          option: () => `${css["custom-option"]}`,
        }}
        name={name}
      />
    </VStack>
  );
};

export default FiltrationSelect;
