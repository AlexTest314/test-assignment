"use client";

import React, { useState } from "react";

const textAreaTypes = {
  default: "opacity-0 w-20 h-54 pl-4 text-base",
  error: "opacity-0 w-20 h-54 pl-4 text-base"
};

const labelAreaTypes = {
  default: "absolute border border-bordercolor border-l-0 rounded-r-md pl-4 h-54 w-297 sm:w-245 p-3",
  error: "absolute border-2 border-error border-l-0 text-black/[0.87] rounded-r-md pl-4 h-54 w-72 p-3"
};
const buttonAreaTypes = {
  default: "absolute w-83 h-54 hover:cursor-pointer border text-black/[0.87] border-black rounded-l-md",
  error: "absolute w-83 h-54 hover:cursor-pointer border-2 text-black/[0.87] border-error rounded-l-md"
};

const helperTypes = {
  default: "text-xs pl-4 mt-1 text-inputvalue h-3.5",
  error: "text-xs pl-4 mt-1 text-error h-3.5"
};

const TextArea = ({ variant }) => {
  const [isFile, setIsFile] = useState("");

  const fileName = (e) => {
    const targetFile = e.target.value;
    const fileName = targetFile.split("\\")[2];
    setIsFile(fileName);
  };
  return (
    <div className='self-center w-380 sm:w-328'>
      <div className='relative mt-50'>
        <button
          type='button'
          className={buttonAreaTypes[`${variant}`]}>
          Upload
        </button>
        <input
          type='file'
          id='photo'
          className={textAreaTypes[`${variant}`]}
          onChange={(e) => fileName(e)}
        />

        <label
          htmlFor='photo'
          className={`${labelAreaTypes[`${variant}`]} ${isFile ? "text-black/[0.87]" : "text-inputvalue"}`}>
          {isFile ? isFile : "Upload your photo"}
        </label>
        <p className={helperTypes[`${variant}`]}></p>
      </div>
    </div>
  );
};

export default TextArea;
