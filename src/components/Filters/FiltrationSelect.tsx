import { useCallback, useEffect, useState } from "react";
import { useFilters } from "../../hooks/useFilters.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectFilters } from "../../redux/filters/selectors.ts";
import { addFilter } from "../../redux/filters/slice.ts";
import { clearFilter } from "../../redux/filters/slice.ts";
import AsyncSelect from "react-select/async";
import { SingleValue } from "react-select";
import { VStack } from "@chakra-ui/react";
import ThickGrayText from "../common/ThickGrayText.tsx";
import { type Option } from "../../data/options";
import css from "./select.module.css";
import { getSelectStyles } from "./selectStyles";
import { SelectIsFiltered } from "../../redux/teachers/selectros.ts";
import { type Options } from "../../data/options";

type FilterationSelectProps = {
  name: "language" | "level" | "from" | "to";
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
  const { applyFilters } = useFilters();

  const onChange = useCallback(
    (newValue: SingleValue<Option>) => {
      setSelectedValue(newValue);
      if (newValue?.value === "all") {
        dispatch(clearFilter(name));
      } else if (newValue?.hasOwnProperty("value")) {
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
    applyFilters();
  }, [filters.level, filters.language, isFiltered]);

  return (
    <VStack spacing="8px" align="flex-start">
      <ThickGrayText fontSize="14px" id="filter teachers label">
        {labelText}
      </ThickGrayText>
      <AsyncSelect
        isMulti={false}
        value={selectedValue}
        cacheOptions
        defaultOptions={defaultOptions || true}
        loadOptions={loadOptions}
        placeholder={name}
        pageSize={2}
        blurInputOnSelect={true}
        aria-labelledby="filter teachers label"
        aria-label="Filtrating teachers dropdown"
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
