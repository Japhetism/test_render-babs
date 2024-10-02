import { InputType } from "@/types/components";


const Input = ({ type = "text", value, id, onChange, placeholder, inputMode, ...rest }: InputType) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      id={id}
      {...rest}
      onChange={onChange}
      inputMode={inputMode}
      className=" placeholder:text-dark_400 text-dark_400 bg-[#fdfdfd] rounded-lg border border-[#ebebeb] focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
    />
  );
};

export default Input;