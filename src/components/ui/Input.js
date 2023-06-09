import { userFormValidation } from "@/helpers/form/validate";
import classNames from "classnames";
import React from "react";

function Input({ watch, error, name, register, type, kind }) {
  const labelClass = classNames("font-sans text-xs absolute left-4 top-6 bg-background h-4 max-w-20 pl-1 pr-1", { "text-default": !error, "text-error": error });
  const inputClass = classNames(" font-sans bg-transparent text-black/[0.87]  mt-8 h-54 w-380 sm:w-328 rounded-md pl-4 pr-4 pt-3 pb-3  focus:outline-none", { "border-default border focus:border focus:border-default": !error, "border-error border-2 focus:border-2 focus:border-error": error });
  const helperClass = classNames("font-sans text-xs pl-4 mr-0 mt-1 h-3.5 w-380 sm:w-328", { "text-default": !error, "text-error": error });

  const inputValue = watch(name);

  return (
    <div className='self-center sm:w-328'>
      <div className='relative'>
        {inputValue ? <label className={labelClass}>{kind}</label> : null}
        <input
          {...register(type, userFormValidation[type])}
          name={name}
          type={type}
          id={type}
          className={inputClass}
          placeholder={kind}
        />
        <p className={helperClass}>
          {error}
          {type === "phone" && !error ? "+38 (XXX) XXX - XX - XX" : null}
        </p>
      </div>
    </div>
  );
}

export default Input;
