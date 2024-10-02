import React, { FC } from "react";

type OverlayProp = {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
};

const Overlay: FC<OverlayProp> = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div
          className={`bg-black opacity-30 fixed inset-0 w-full h-full block lg:hidden z-40`}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Overlay;
