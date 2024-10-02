'use client'

import { ChangeEvent, useState } from 'react'

type FormInputPropTypes = {
    type: string;
    placeholder: string;
    className?: string;
    inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    name?: string
    value?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({type, name, value, onChange, className, placeholder, inputMode}: FormInputPropTypes) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

 
  
  
  return (
    <div className="relative z-0 w-full">
            <input 
              type={type}
              name={name}
              id={name}
              value={value}
              onChange={onChange}
              inputMode={inputMode}
              placeholder={placeholder}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`${className} peer py-2 block w-full px-0 mt-0 bg-transparent border-0 border-b font-barlow placeholder:text-sm font-medium text-dark_100 appearance-none focus:outline-none transition duration-300 focus:ring-0 focus:border-primary_100 border-dark_300  
                placeholder-transparent`} />
               <label
                htmlFor={name}
                className={`absolute -top-3 text-xs text-primary_100
                  ${isFocused ? '-top-3 text-xs text-primary_100' : 'peer-placeholder-shown:text-dark_100 peer-placeholder-shown:top-3 peer-placeholder-shown:font-medium peer-placeholder-shown:text-sm'} 
                  duration-300 -z-1 origin-0 capitalize`}
              >
                {name}
              </label>
        </div>
  )
}

export default FormInput