import Select from "react-select";
import { type Option } from "../../data/options";
import css from "./select.module.css";
import { VStack } from "@chakra-ui/react";
import ThickGrayText from "../TeachersPageComponents/ThickGrayText";
import { ActionMeta } from "react-select";

export type SelectChangeHandler = (
  option: Option,
  actionMeta: ActionMeta<Option>
) => void;

type FilterationSelectProps = {
  options: Option[];
  name: string;
  width: string;
  labelText: string;
  onChange: SelectChangeHandler;
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
      <Select
        onChange={(option, actionMeta) => {
          if (option && actionMeta) {
            onChange(option as Option, actionMeta);
          }
        }}
        defaultValue={{ value: "", label: name }}
        unstyled
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width,
          }),
          control: (baseStyles) => ({
            position: "relative",
            backgroundColor: "#FFFFFF",
            border: "none",
            height: "48px",
            borderRadius: "14px",
            padding: "14px 18px",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.1",
            color: "#121417",
            cursor: "pointer",
          }),
          dropdownIndicator: (baseStyles) => ({
            position: "absolute",
            top: "14px",
            right: "14px",
            stroke: "#121417",
            fill: "none",
            cursor: "pointer",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            padding: "14px 18px",
            marginTop: "4px",
            display: "flex",
            flexDirection: "column",
            columnGap: "8px",
          }),
          option: (baseStyles, state) => ({
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.1",
            color: state.isSelected ? "#121417" : "#12141733",
            marginBottom: "8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            cursor: "pointer",
          }),
        }}
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
