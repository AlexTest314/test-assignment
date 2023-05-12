"use client";
import React, { useState } from "react";

const inputTypes = {
  default: "bg-transparent self-center text-black/[0.87] border-bordercolor border mt-8 h-54 w-380 sm:w-328 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border focus:border-bordercolor focus:outline-none",
  error: "bg-transparent text-black/[0.87] border-2 border-error h-54 w-380 sm:w-328 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border-2 focus:border-error focus:outline-none"
};

const labelTypes = {
  default: "text-inputvalue text-xs absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1",
  error: "text-xs text-error absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1"
};
const helperTypes = {
  default: "text-xs pl-4 mr-0 mt-1 text-inputvalue h-3.5 w-380 sm:w-328",
  error: "text-xs pl-4 mr-0 mt-1 text-error h-3.5 w-380 sm:w-328"
};

function Input({ type, value, variant, setValue, kind, spacing }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='self-center sm:w-328'>
      <div className='relative'>
        {inputValue ? <label className={labelTypes[`${variant}`]}>{kind}</label> : null}
        <input
          type={type}
          id={type}
          className={`${inputTypes[`${variant}`]} ${spacing}`}
          placeholder={inputValue ? "" : `${kind}`}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p className={helperTypes[`${variant}`]}>{kind === "Phone" ? "+38 (XXX) XXX - XX - XX" : null}</p>
      </div>
    </div>
  );
}

export default Input;
