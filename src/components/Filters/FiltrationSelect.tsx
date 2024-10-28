import Select from "react-select";
import { type Options } from "../../data/options";

type FilterationSelectProps = {
  options: Options;
  name: string;
};

const FiltrationSelect = ({ options, name }: FilterationSelectProps) => {
  return (
    <Select
      isSearchable={true}
      name={name}
      options={options}
    />
  );
};

export default FiltrationSelect;
