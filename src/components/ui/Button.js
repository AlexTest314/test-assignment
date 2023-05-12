import React from "react";

const buttonTypes = {
  default: "h-34 w-100 body-font font-nunito text-center text-body text-black/[.87] rounded-full bg-primary hover:bg-hover",
  more: "h-34 w-120 body-font font-nunito text-center text-body text-black/[.87] rounded-full bg-primary hover:bg-hover",
  disable: "h-34 w-100 body-font font-nunito text-center text-body text-white/[.87] rounded-full bg-disable opacity-"
};

const Button = ({ spacing, variant, type, onClick, children }) => {
  return (
    <button
      className={`${buttonTypes[`${variant}`]} ${spacing}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
