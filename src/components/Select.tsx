import { SelectType } from "@/types/components";
import { DropDownIcon } from '../../public/assets/icons'


const Select = ({
  name,
  value,
  onChange,
  disabled = false,
  children,
  id,
  bodyClassName,
  selectClassName,
  iconClassName,
  ...rest
}: SelectType) => {
  return (
    <div className={`${bodyClassName} font-inter w-full relative`}>
    <select
      disabled={disabled}
      value={value}
      name={name}
      id={id}
      onChange={onChange}
      {...rest}
      className={`${selectClassName} w-full placeholder:text-dark_500 text-dark_500 rounded-lg bg-[#fdfdfd] border border-[#cec1c1] border-opacity-80 focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none appearance-none`}
    >
      {children}
    </select>
    <DropDownIcon className={`${iconClassName} absolute`}/> 
  </div>
   
  );
};

export default Select;


