"use client";

import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type: "submit" | "reset" | "button";
  loading?: boolean;
};

const Button = ({
  className,
  children,
  onClick,
  type,
  onMouseEnter,
  onMouseLeave,
  loading = false
}: ButtonProps) => {
  return (
    <button
      disabled={loading}
      type={type}
      className={`${className} flex items-center justify-center font-barlow rounded-md`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {loading ? <Loading /> : children}
    </button>
  );
};

export default Button;

function Loading() {
  return (
    <div className="inline-flex gap-2 items-center justify-center w-fit">
      <div className="w-2 h-2 rounded-full animate-pulse bg-current" />
      <div className="w-2 h-2 rounded-full animate-pulse bg-current" />
      <div className="w-2 h-2 rounded-full animate-pulse bg-current" />
    </div>
  );
}
