"use client";

import Image from "next/image";
import React from "react";
import RadioSel from "../../img/radio-selected.svg";
import Radio from "../../img/radio.svg";

const Radiobutton = ({ name, checkInput, children, checkValue, index }) => {
  return (
    <div className='flex items-center relative mt-7'>
      <input
        {...checkInput}
        className='opacity-0 z-1 h-5 w-5'
        value={+index}
        id={index}
        type='radio'
        name={name}
      />

      <Image
        width={20}
        height={20}
        className=' absolute bg-white rounded-full h-5 w-5 hover:to-black -z-10'
        src={checkValue == index ? RadioSel.src : Radio.src}
        alt='radio'
      />

      <label
        htmlFor={index}
        className='ml-3 text-body'>
        {children}
      </label>
    </div>
  );
};

export default Radiobutton;
