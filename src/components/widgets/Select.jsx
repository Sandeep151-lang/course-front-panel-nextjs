import React from 'react'
import Select from 'react-select';

const Dropdown = ({
  label,
  isDisabled,
  isMulti,
  selectedOption,
  onChange,
  options,
  isSearchable,
  placeholder,
  value,
  labelClassName,
  mandatory,
  error,
  other
}) => {
  return (
    <>
    {label && <label className={`${labelClassName} font-semibold` } htmlFor="lname">{label}{mandatory && <span className="text-rose-600 mx-0.5">*</span>}</label>} 
    <Select
        isMulti={isMulti}
        defaultValue={selectedOption}
        onChange={onChange}
        options={options}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        placeholder={placeholder}
        value={value}
        {...other}
        />
    {error && <span className="text-rose-600 text-sm font-semibold" style={{marginRight:"50%"}} >{error}</span>}

        </>
  )
}

export default Dropdown