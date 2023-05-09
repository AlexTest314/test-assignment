"use client";

import React, { useState } from "react";

const textAreaTypes = {
  default: "opacity absolute left-4 top-2",
  upload: "bg-transparent text-black/[0.87] border-bordercolor border h-14 w-96 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border focus:border-bordercolor focus:outline-none",
  error: "bg-transparent text-black/[0.87] border-2 border-error h-14 w-96 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border-2 focus:border-error focus:outline-none"
};

const labelAreaTypes = {
  default: "text-inputvalue text-xs absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1",
  error: "text-xs text-error absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1"
};
const helperAreaTypes = {
  default: "text-xs ml-4 mt-1 text-inputvalue",
  error: "text-xs ml-4 mt-1 text-error"
};

const TextArea = () => {
  const variant = "default";
  return (
    <div className='relative'>
      <label class='block'>
        <span class='sr-only'>Choose profile photo</span>
        <input
          type='file'
          class='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    '
        />
      </label>
    </div>
  );
};

export default TextArea;
