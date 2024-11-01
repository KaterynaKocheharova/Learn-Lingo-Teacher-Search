import { StylesConfig } from "react-select";

type GetSelectStyles = (width: string) => StylesConfig;

export const getSelectStyles: GetSelectStyles = (width) => {
  return {
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
  };
};
