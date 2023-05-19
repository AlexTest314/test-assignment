import classNames from "classnames";
import React from "react";
import Radiobutton from "./ui/Radiobutton";

const RadioSection = ({ register, watch, name, error, positions }) => {
  const helperClass = classNames(" font-sans text-xs pl-4 mt-1 h-3.5 w-380 sm:w-328", { "text-default": !error, "text-error": error });
  const checkValue = watch(name);

  return (
    <div className='w-380 self-center sm:w-328'>
      <p className='font-sans text-body mt-29 mb-11'>Select your position</p>
      {positions.map((position, index) => {
        return (
          <Radiobutton
            register={register}
            name={name}
            index={index}
            key={position.name}
            id={position.id}
            checkValue={checkValue}>
            {position.name}
          </Radiobutton>
        );
      })}
      <p className={helperClass}>{error}</p>
    </div>
  );
};

export default RadioSection;
