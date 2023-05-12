import React from "react";
import Radiobutton from "./ui/Radiobutton";

const RadioSection = ({ isChecked, setIsChecked }) => {
  return (
    <div className='w-380 self-center sm:w-328'>
      <p className='text-body mt-29 mb-11'>Select your position</p>
      <Radiobutton
        setIsChecked={setIsChecked}
        isChecked={isChecked}>
        Frontend developer
      </Radiobutton>
      <Radiobutton
        setIsChecked={setIsChecked}
        isChecked={isChecked}>
        Backend developer
      </Radiobutton>
      <Radiobutton
        setIsChecked={setIsChecked}
        isChecked={isChecked}>
        Designer
      </Radiobutton>
      <Radiobutton
        setIsChecked={setIsChecked}
        isChecked={isChecked}>
        QA
      </Radiobutton>
    </div>
  );
};

export default RadioSection;
