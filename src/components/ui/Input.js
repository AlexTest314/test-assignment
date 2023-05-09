"use client";
import React, { useState } from "react";

const inputTypes = {
  default: "bg-transparent text-black/[0.87] border-bordercolor border h-14 w-96 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border focus:border-bordercolor focus:outline-none",
  error: "bg-transparent text-black/[0.87] border-2 border-error h-14 w-96 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border-2 focus:border-error focus:outline-none"
};

const labelTypes = {
  default: "text-inputvalue text-xs absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1",
  error: "text-xs text-error absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1"
};
const helperTypes = {
  default: "text-xs ml-4 mt-1 text-inputvalue",
  error: "text-xs ml-4 mt-1 text-error"
};

function Input({ type, value, variant, setValue }) {
  return (
    <div className='relative'>
      {inputValue ? <label className={labelTypes[`${variant}`]}>Email</label> : null}
      <input
        type={type}
        id={type}
        className={inputTypes[`${variant}`]}
        placeholder={inputValue ? "" : "Email"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className={helperTypes[`${variant}`]}>helper text</p>
    </div>
  );
}

export default Input;
