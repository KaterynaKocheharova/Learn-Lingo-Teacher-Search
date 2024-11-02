import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

import { selectFilters } from "../../redux/filters/selectors.ts";
import { fetchFilteredTeachers } from "../../redux/teachers/operations.ts";
import { addFilter } from "../../redux/filters/slice.ts";

import CreatableSelect from "react-select/creatable";
import { ActionMeta, SingleValue } from "react-select";

import { VStack } from "@chakra-ui/react";
import ThickGrayText from "../common/ThickGrayText.tsx";

import { type Option } from "../../data/options";

import css from "./select.module.css";
import { getSelectStyles } from "./selectStyles";

type FilterationSelectProps = {
  options: Option[];
  name: string;
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
      if (newValue) {
        if (newValue.hasOwnProperty("value")) {
          dispatch(
            addFilter({
              filters: {
                [name]: newValue.value,
              },
            })
          );

          dispatch(
            fetchFilteredTeachers({
              filters: {
                ...filters,
                [name]: newValue.value,
              },
            })
          );
        }
      }
    },
    [dispatch, filters, name]
  );

  return (
    <VStack spacing="8px" align="flex-start">
      <ThickGrayText fontSize="14px">{labelText}</ThickGrayText>
      <CreatableSelect
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
