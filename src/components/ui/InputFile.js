import { userFormValidation } from "@/helpers/form/validate";
import classNames from "classnames";
import React from "react";

const InputFile = ({ watch, name, register, error }) => {
  const inputValue = watch(name);
  const photoFile = inputValue ? inputValue[0] : inputValue;
  const labelClass = classNames("font-sans absolute border-l-0 rounded-r-md pl-4 h-54 w-297 sm:w-245 p-3", { "border border-default text-default": !photoFile && !error, "text-black text-opacity-87 border border-default": photoFile, "border-error text-black text-opacity-87 border-2": error });
  const buttonClass = classNames("font-sans absolute w-83 h-54 hover:cursor-pointer text-black/[0.87] rounded-l-md", { "border border-black": !error, "border-2 border-error": error });
  const helperClass = classNames("font-sans text-xs pl-4 mt-1 h-3.5 w-380 sm:w-328 ", { "text-default": !error, "text-error": error });

  return (
    <div className='self-center w-380 sm:w-328'>
      <div className='relative mt-8'>
        <button
          type='button'
          className={buttonClass}>
          Upload
        </button>
        <input
          {...register("photo", userFormValidation.photo)}
          accept='image/*'
          type='file'
          id='photo'
          name={name}
          className={"font-sans opacity-0 w-83 h-54 pl-4 text-base"}
        />

        <label
          htmlFor='photo'
          className={labelClass}>
          {photoFile ? photoFile.name : "Upload your photo"}
        </label>
        <p className={helperClass}>{error}</p>
      </div>
    </div>
  );
};

export default InputFile;
