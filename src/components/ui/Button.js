import React from "react";

const buttonTypes = {
  default: "h-8 w-24 body-font font-nunito text-center text-base text-black/[.87] rounded-full bg-primary hover:bg-hover",
  more: "h-9 w-24 body-font font-nunito text-center text-base text-black/[.87] rounded-full bg-primary hover:bg-hover",
  disable: "h-8 w-24 body-font font-nunito text-center text-base text-white/[.87] rounded-full bg-disable opacity-"
};

const Button = ({ variant, type, onClick, children }) => {
  return (
    <button
      className={buttonTypes[`${variant}`]}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
