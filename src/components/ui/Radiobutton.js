import { userFormValidation } from "@/helpers/form/validate";
import Image from "next/image";
import React from "react";
import RadioSel from "../../img/radio-selected.svg";
import Radio from "../../img/radio.svg";

const Radiobutton = ({ register, name, children, checkValue, index }) => {
  return (
    <div className='flex items-center relative mt-7'>
      <input
        {...register("position_id", userFormValidation.position_id)}
        className='opacity-0 z-1 h-5 w-5'
        value={+index + 1}
        id={index}
        type='radio'
        name={name}
      />

      <Image
        width={20}
        height={20}
        className=' absolute bg-white rounded-full h-5 w-5 hover:to-black -z-10'
        src={checkValue == index + 1 ? RadioSel.src : Radio.src}
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
