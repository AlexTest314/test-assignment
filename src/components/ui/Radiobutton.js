import React from "react";
import RadioSel from "../../img/radio-selected.svg";
import Radio from "../../img/radio.svg";

const Radiobutton = () => {
  return (
    <div>
      <img
        className='bg-white rounded-full h-5 w-5 hover:to-black '
        src={Radio.src}></img>
      <input
        className='hover:ring-ping'
        id='draft'
        type='radio'
        name='status'
      />
      <label
        for='draft'
        className='peer-checked/draft:text-sky-500'>
        Draft
      </label>
    </div>
  );
};

export default Radiobutton;
