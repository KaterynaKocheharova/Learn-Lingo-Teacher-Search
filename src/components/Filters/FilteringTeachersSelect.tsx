import Select from 'react-select';

 const FilteringTeachersSelect ({options, name}) => {



  return (
      <Select
        defaultValue={options[0]}
        isSearchable={true}
        name={name}
        options={options}
      />
  );
};


export default FilteringTeachersSelect;