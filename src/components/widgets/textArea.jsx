import React from 'react'

const TextArea = ({placeholder,classname,labelClassName,label,mandatory,name,rest}) => {
  return (
    <>
   {label && <label className={`${labelClassName} font-semibold` } htmlFor="lname">{label}{mandatory && <span className="text-rose-600 mx-0.5">*</span>}</label>} 
    
    <textarea type="text" name={name}  placeholder={placeholder} className={`${classname} border border-current`}/>
    {rest}
    </>
  )
}

export default TextArea