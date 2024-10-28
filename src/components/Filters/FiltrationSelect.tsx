// import Select from "react-select";
// import { type Options } from "../../data/options";
// import css from "./select.module.css";
// import { VStack } from "@chakra-ui/react";
// import ThickGrayText from "../TeachersPageComponents/ThickGrayText";

// type FilterationSelectProps = {
//   options: Options;
//   name: string;
//   width: string;
//   labelText: string;
// };

// const FiltrationSelect = ({
//   options,
//   name,
//   width,
//   labelText,
// }: FilterationSelectProps) => {
//   return (
//     <VStack spacing="8px" align="flex-start">
//       <ThickGrayText fontSize="14px">{labelText}</ThickGrayText>
//       <Select
//         defaultValue={
//           name === "languages"
//             ? { value: "English", label: "English" }
//             : options[0]
//         }
//         unstyled
//         styles={{
//           container: (baseStyles) => ({
//             ...baseStyles,
//             width,
//           }),
//           control: (baseStyles, state) => ({
//             position: "relative",
//             backgroundColor: "#FFFFFF",
//             border: "none",
//             height: "48px",
//             borderRadius: "14px",
//             padding: "14px 18px",
//             fontSize: "18px",
//             fontWeight: "500",
//             lineHeight: "1.1",
//             color: "#121417",
//           }),
//           dropdownIndicator: (baseStyles, state) => ({
//             position: "absolute",
//             top: "14px",
//             right: "14px",
//             stroke: "#121417",
//             fill: "none",
//             cursor: "pointer",
//           }),
//           menu: (baseStyles, state) => ({
//             ...baseStyles,
//             backgroundColor: "#FFFFFF",
//             borderRadius: "14px",
//             padding: "14px 18px",
//             marginTop: "4px",
//             display: "flex",
//             flexDirection: "column",
//             columnGap: "8px",
//           }),
//           option: (baseStyles, state) => {
//             return {
//               fontSize: "18px",
//               fontWeight: "500",
//               lineHeight: "1.1",
//               color: state.isSelected ? "#121417" : "#12141733",
//               marginBottom: "8px",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             };
//           },
//         }}
//         classNames={{
//           option: (state) => `${css["custom-option"]}`,
//         }}
//         options={options}
//         name={name}
//       />
//     </VStack>
//   );
// };

// export default FiltrationSelect;


import Select, { GroupBase, SelectProps } from "react-select";
import { type Options } from "../../data/options"; 
import css from "./select.module.css";
import { VStack } from "@chakra-ui/react";
import ThickGrayText from "../TeachersPageComponents/ThickGrayText";

type FilterationSelectProps<Option = any, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = 
  SelectProps<Option, IsMulti, Group> & {
  options: Options; 
  name: string;
  width: string;
  labelText: string;
};

const FiltrationSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  options,
  name,
  width,
  labelText,
  ...selectProps 
}: FilterationSelectProps<Option, IsMulti, Group>) => {
  return (
    <VStack spacing="8px" align="flex-start">
      <ThickGrayText fontSize="14px">{labelText}</ThickGrayText>
      <Select
        defaultValue={
          name === "languages"
            ? { value: "English", label: "English" }
            : options[0]
        }
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
            cursor: "pointer"
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
          }),
        }}
        classNames={{
          option: () => `${css["custom-option"]}`,
        }}
        options={options}
        name={name}
        {...selectProps} // Spread the other SelectProps to the Select
      />
    </VStack>
  );
};

export default FiltrationSelect;
