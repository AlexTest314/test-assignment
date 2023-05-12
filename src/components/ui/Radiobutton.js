"use client";

import React, { useState } from "react";
import RadioSel from "../../img/radio-selected.svg";
import Radio from "../../img/radio.svg";

const Radiobutton = ({ children, isChecked, setIsChecked }) => {
  return (
    <div className='flex items-center relative mt-7'>
      <input
        className='hover:ring-ping opacity-0 z-1 h-5 w-5'
        id='draft'
        type='radio'
        name='status'
        onClick={() => setIsChecked(true)}
      />
      {isChecked ? (
        <img
          className=' absolute bg-white rounded-full h-5 w-5 hover:to-black -z-10'
          src={RadioSel.src}></img>
      ) : (
        <img
          className='absolute bg-white rounded-full h-5 w-5 hover:to-black -z-10'
          src={Radio.src}></img>
      )}

      <label
        for='draft'
        className='ml-3 text-body'>
        {children}
      </label>
    </div>
  );
};

export default Radiobutton;
