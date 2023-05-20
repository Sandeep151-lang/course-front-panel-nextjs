import React from 'react'

const Input = ({label,className,values,placeholder,id,error,type,clearErrors,mandatory,labelClassName,...rest}) => {
  return (
    <>
    <div className="py-2">
   {label && <label className={`${labelClassName} font-semibold` } htmlFor="lname">{label}{mandatory && <span className="text-rose-600 mx-0.5">*</span>}</label>} 
   <div>
    <input type={type} id={id} value={values} name="fname" disabled={rest.loading} placeholder={placeholder} className={`${className}  
    rounded border border-solid hover:border-slate-600  bg-white ${error ? "border-rose-600":"border-slate-600"}`} {...rest}/>
   </div>
    {error && <span className="text-rose-600 text-sm font-semibold" style={{marginRight:"50%"}} >{error}</span>}
    </div>
    </>

  )
}

export default Input