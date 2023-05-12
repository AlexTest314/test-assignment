import React from "react";
import Radiobutton from "./ui/Radiobutton";

const RadioSection = ({ isChecked, setIsChecked, positions }) => {
  return (
    <div className='w-380 self-center sm:w-328'>
      <p className='text-body mt-29 mb-11'>Select your position</p>
      {positions.map((position) => {
        return (
          <Radiobutton
            key={position.name}
            id={position.id}
            setIsChecked={setIsChecked}
            isChecked={isChecked}>
            {position.name}
          </Radiobutton>
        );
      })}
    </div>
  );
};

export default RadioSection;
