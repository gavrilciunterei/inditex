import React from 'react';
import Select from 'react-select';
import TextDescription from '../TextDescription';

function SelectInput({ defaultValue, onChange, options, text, inputId }) {
  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? '#0F776E' : styles.color,
      backgroundColor: state.isSelected ? '#CBFBF1' : styles.color,
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      '&:hover': {
        color: '#0F776E',
        backgroundColor: '#CBFBF1',
      },
    }),
    control: (styles, state) => ({
      ...styles,
      boxShadow: state.isFocused ? '#0F776E' : 0,
      borderColor: state.isFocused ? '#D0EAE2' : '#CED4DA',
      '&:hover': {
        borderColor: state.isFocused ? '#D0EAE2' : '#CED4DA',
      },
    }),
  };

  return (
    <div className="flex items-center mt-2 mb-2">
      <TextDescription text={text} />
      <Select
        getOptionValue={(option) => option.code}
        getOptionLabel={(option) => option.name}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        styles={customStyles}
        inputId={inputId}
      />
    </div>
  );
}

export default SelectInput;
