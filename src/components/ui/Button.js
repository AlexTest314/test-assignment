import classNames from "classnames";
import React from "react";

const Button = ({ disable, spacing, variant, type, onClick, children }) => {
  const buttonClass = classNames(`${spacing} font-sans h-34 body-font font-nunito text-center text-body rounded-full`, { "w-100  text-black/[.87]  bg-primary hover:bg-hover": variant === "default", "w-120  text-black/[.87]  bg-primary hover:bg-hover": variant === "more", "w-100  text-white/[.87]  bg-disable": disable });
  return (
    <button
      disable
      className={buttonClass}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
