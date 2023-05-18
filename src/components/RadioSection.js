import React, { useState } from "react";

const helperTypes = {
  default: "text-xs pl-4 mt-1 text-inputvalue h-3.5",
  error: "text-xs pl-4 mt-1 text-error h-3.5"
};
import Radiobutton from "./ui/Radiobutton";

const RadioSection = ({ watch, name, error, checkInput, positions }) => {
  const [isChecked, setIsChecked] = useState();
  const checkValue = watch(name);
  console.log("checkValue", checkValue);
  return (
    <div className='w-380 self-center sm:w-328'>
      <p className='text-body mt-29 mb-11'>Select your position</p>
      {positions.map((position, index) => {
        return (
          <Radiobutton
            name={name}
            checkInput={checkInput}
            index={index}
            key={position.name}
            id={position.id}
            checkValue={checkValue}>
            {position.name}
          </Radiobutton>
        );
      })}
      <p className={helperTypes[`${"error"}`]}>{error}</p>
    </div>
  );
};

export default RadioSection;
