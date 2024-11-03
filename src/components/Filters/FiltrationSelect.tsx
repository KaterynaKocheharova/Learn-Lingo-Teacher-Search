import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

import { selectFilters } from "../../redux/filters/selectors.ts";
import { addFilter } from "../../redux/filters/slice.ts";
import { clearFilter } from "../../redux/filters/slice.ts";

import CreatableSelect from "react-select/creatable";
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

type FilterationSelectProps = {
  options: Option[];
  name: "language" | "level" | "price";
  width: string;
  labelText: string;
};

const FiltrationSelect = ({
  options,
  name,
  width,
  labelText,
}: FilterationSelectProps) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const onChange = useCallback(
    (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
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
      dispatch(
        fetchTeachers({
          isFirstBatch: true,
        })
      );
    }
  }, [filters]);

  return (
    <VStack spacing="8px" align="flex-start">
      <ThickGrayText fontSize="14px">{labelText}</ThickGrayText>
      <CreatableSelect
        isClearable={true}
        onChange={onChange}
        defaultValue={{ value: "", label: name }}
        unstyled
        styles={getSelectStyles(width)}
        classNames={{
          option: () => `${css["custom-option"]}`,
        }}
        options={options}
        name={name}
      />
    </VStack>
  );
};

export default FiltrationSelect;
