"use client";

import React, { useState } from "react";

const textAreaTypes = {
  default: "opacity-0 w-20 h-14 pl-4 text-base",
  error: "opacity-0 w-20 h-14 pl-4 text-base"
};

const labelAreaTypes = {
  default: "absolute border border-bordercolor border-l-0 rounded-r-md pl-4 h-14 w-72 p-3",
  error: "absolute border-2 border-error border-l-0 text-black/[0.87] rounded-r-md pl-4 h-14 w-72 p-3"
};
const buttonAreaTypes = {
  default: "absolute w-20 h-14 hover:cursor-pointer border text-black/[0.87] border-black rounded-l-md",
  error: "absolute w-20 h-14 hover:cursor-pointer border-2 text-black/[0.87] border-error rounded-l-md"
};

const helperTypes = {
  default: "text-xs pl-4 mt-1 text-inputvalue",
  error: "text-xs pl-4 mt-1 text-error"
};

const TextArea = ({}) => {
  const [isFile, setIsFile] = useState("");
  const variant = "default";

  const fileName = (e) => {
    const targetFile = e.target.value;
    const fileName = targetFile.split("\\")[2];
    setIsFile(fileName);
  };
  return (
    <div className='relative'>
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
      <p className={helperTypes[`${variant}`]}>helper text</p>
    </div>
  );
};

export default TextArea;
