import { type Options } from "../data/options";

type FilterOptions = (inputValue: string, options: Options) => Options;
export const filterOptions: FilterOptions = (inputValue, options) => {
  return options.filter((option) => {
    if (typeof option.label === "string") {
      return option.label.toLowerCase().includes(inputValue.toLowerCase());
    } else if (typeof option.label === "number") {
      return String(option.label)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    }
    return false;
  });
};