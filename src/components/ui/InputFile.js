"use client";

import { userFormValidation } from "@/helpers/form/validate";
import React from "react";

const textAreaTypes = {
  default: "opacity-0 w-83 h-54 pl-4 text-base",
  error: "opacity-0 w-83 h-54 pl-4 text-base"
};

const labelAreaTypes = {
  default: "absolute border border-bordercolor border-l-0 rounded-r-md pl-4 h-54 w-297 sm:w-245 p-3",
  error: "absolute border-2 border-error border-l-0 text-black/[0.87] rounded-r-md pl-4 h-54 w-72 p-3"
};
const buttonAreaTypes = {
  default: "absolute w-83 h-54 hover:cursor-pointer border text-black/[0.87] border-black rounded-l-md",
  error: "absolute w-83 h-54 hover:cursor-pointer border-2 text-black/[0.87] border-error rounded-l-md"
};

const helperTypes = {
  default: "text-xs pl-4 mt-1 text-inputvalue h-3.5",
  error: "text-xs pl-4 mt-1 text-error h-3.5"
};

const InputFile = ({ watch, name, register, error }) => {
  const inputValue = watch(name);
  return (
    <div className='self-center w-380 sm:w-328'>
      <div className='relative mt-8'>
        <button
          type='button'
          className={error ? buttonAreaTypes.error : buttonAreaTypes.default}>
          Upload
        </button>
        <input
          {...register("photo", userFormValidation.photo)}
          accept='image/*'
          type='file'
          id='photo'
          name={name}
          className={error ? textAreaTypes.error : textAreaTypes.default}
        />

        <label
          htmlFor='photo'
          className={`${error ? labelAreaTypes.error : labelAreaTypes.default} ${inputValue === undefined ? "text-inputvalue" : inputValue.length > 0 ? "text-black/[0.87]" : "text-inputvalue"}`}>
          {inputValue === undefined ? "Upload your photo" : inputValue.length > 0 ? inputValue[0].name : "Upload your photo"}
        </label>
        <p className={helperTypes.error}>{error}</p>
      </div>
    </div>
  );
};

export default InputFile;
