import SearchIcon from "@/icons/SearchIcon"
import AsyncSelect from "react-select/async"

const Select = ({
  labelClassName,
    label = "",
    className,
    id,
    value,
    placeholder,
    defaultOptions,
    onChange,
    mandatory,
    loadOptions,
    isCountryCode,
    isSearch = true, // if you want to show search icon and search functionality should work
    shouldSearch = false, // if you don't want to show search icon and search functionality should work
    onInputChange = () => {},
    error,
    isLoading = false,
    isClearable = false,
    isMulti = false,
    isDisabled = false,
    ...other
  }) => {
    const customStyles = {
      control: (provided, { isFocused }) => ({
        ...provided,
        minHeight: 36,
        padding: isSearch ? "0 0 0 30px" : "0",
        borderRadius: "6px",
        border: isFocused ? "1px solid #40B5E8 !important" : "1px solid #dfdfdf !important",
        boxShadow: "none",
      }),
      option: (provided, { isFocused }) => ({
        ...provided,
        fontSize: 12,
        fontWeight: 500,
        background: isFocused ? "rgba(64, 181, 232, 0.15)" : "#ffffff",
        color: isFocused ? "rgba(64, 181, 232, 1)" : "rgba(0, 0, 0, 1)",
      }),
      noOptionsMessage: (base) => ({
        ...base,
        fontSize: 12,
        fontWeight: 500,
        color: "#000000",
      }),
      valueContainer: (provided, { isFocused }) => ({
        ...provided,
        fontSize: 12,
        fontWeight: isFocused ? 500 : 400,
        color: "#000000",
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: "250px",
      }),
      menu: (provided) => ({
        ...provided,
        zIndex: "9999",
      }),
      indicatorSeparator: (styles) => {
        return {
          ...styles,
          display: "none",
        }
      },
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: "5px 8px",
        display: isSearch ? "none" : "block",
      }),
      clearIndicator: (provided) => ({
        ...provided,
        padding: "5px",
      }),
    }
  
    const phoneStyle = {
      control: (provided, { isFocused }) => ({
        ...provided,
        minHeight: 36,
        height: 36,
        width: 100,
        padding: "0 6px 0 14px",
        textAlign: "center",
        borderRadius: "6px 0 0 6px",
        border: isFocused ? "1px solid #40B5E8 !important" : "1px solid #dfdfdf !important",
        boxShadow: "none",
      }),
      option: (provided, { isFocused }) => ({
        ...provided,
        fontSize: 12,
        fontWeight: 500,
        background: isFocused ? "rgba(64, 181, 232, 0.15)" : "#ffffff",
        color: isFocused ? "rgba(64, 181, 232, 1)" : "rgba(0, 0, 0, 1)",
      }),
      noOptionsMessage: (base) => ({
        ...base,
        fontSize: 12,
        fontWeight: 500,
        color: "#000000",
      }),
      valueContainer: (provided, { isFocused }) => ({
        ...provided,
        fontSize: 12,
        padding: "0",
        textAlign: "center",
        fontWeight: isFocused ? 500 : 400,
        color: "#000000",
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: "250px",
      }),
      menu: (provided) => ({
        ...provided,
        minWidth: "160px",
        zIndex: "20",
      }),
      indicatorSeparator: (styles) => {
        return {
          ...styles,
          display: "none",
        }
      },
    }
  
    return (
      <div className={className}>
            {label && <label className={`${labelClassName} font-semibold` } htmlFor="lname">{label}{mandatory && <span className="text-rose-600 mx-0.5">*</span>}</label>} 

        <div className="relative">
          {isSearch && (
            <div className="absolute top-2/4 -translate-y-2/4 left-3 z-10 text-gray-300">
              <SearchIcon size="14.314" />
      
            </div>
          )}
          <AsyncSelect
            isMulti={isMulti}
            styles={isCountryCode ? phoneStyle : customStyles}
            isSearchable={isSearch || shouldSearch}
            id={id}
            placeholder={placeholder}
            value={value}
            onInputChange={onInputChange}
            onChange={onChange}
            loadOptions={loadOptions}
            defaultOptions={defaultOptions}
            isClearable={isClearable}
            isDisabled={isDisabled}
            closeMenuOnSelect={!isMulti}
            isLoading={isLoading}
            {...other}
          />
        </div>
        {error && <span className="text-rose-600 text-sm font-semibold" style={{marginRight:"50%"}} >{error}</span>}

      </div>
    )
  }
  
  export default Select
  