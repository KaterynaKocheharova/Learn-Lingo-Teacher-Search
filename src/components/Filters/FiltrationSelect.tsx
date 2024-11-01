import CreatableSelect from "react-select/creatable";
import { VStack } from "@chakra-ui/react";
import ThickGrayText from "../TeachersPageComponents/ThickGrayText";

import { type Option } from "../../data/options";

import css from "./select.module.css";
import { getSelectStyles } from "./selectStyles";

type FilterationSelectProps = {
  options: Option[];
  name: string;
  width: string;
  labelText: string;
  onChange: () => void;
};

const FiltrationSelect = ({
  options,
  name,
  width,
  labelText,
  onChange,
}: FilterationSelectProps) => {
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
