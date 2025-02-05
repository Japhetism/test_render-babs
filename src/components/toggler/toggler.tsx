import React from "react";
const Toggler = ({
  toggleOption,
  setToggleOption,
}: {
  toggleOption: boolean;
  setToggleOption: (value: React.SetStateAction<boolean>) => void;
}) => {
  return (
    <div className="flex">
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={toggleOption}
          readOnly
        />
        <div
          onClick={() => setToggleOption((prevState) => !prevState)}
          className="w-11 h-6 bg-[#C7CCD0] rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-[#3BB77E] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-textDark"
        ></div>
      </label>
    </div>
  );
};
export default Toggler;
