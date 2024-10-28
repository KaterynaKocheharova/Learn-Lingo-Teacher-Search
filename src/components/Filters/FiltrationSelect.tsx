import Select, { DropdownIndicatorProps } from "react-select";
import { type Options } from "../../data/options";

type FilterationSelectProps = {
  options: Options;
  name: string;
  width: string;
};

// group
// groupHeading
// indicatorsContainer
// indicatorSeparator
// input
// loadingIndicator
// loadingMessage

// menu

// menuList
// menuPortal
// multiValue
// multiValueLabel
// multiValueRemove
// noOptionsMessage
// option
// placeholder
// singleValue
// valueContainer

const FiltrationSelect = ({ options, name, width }: FilterationSelectProps) => {
  return (
    <Select
      menuIsOpen={true}
      defaultValue={options[0]}
      unstyled
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          width,
        }),
        control: (baseStyles, state) => ({
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
        }),
        dropdownIndicator: (baseStyles, state) => ({
          position: "absolute",
          top: "14px",
          right: "14px",
          stroke: "#121417",
          fill: "none",
          cursor: "pointer",
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          padding: "14px 18px",
          marginTop: "4px",
        }),
        group: (baseStyles, state) => ({
          ...baseStyles,
        }),
      }}
      options={options}
      // components={{ DropdownIndicator }}
      name={name}
    />
  );
};

export default FiltrationSelect;
