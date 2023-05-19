import { DESCRIPTION_TEXT } from "@/helpers/description_text";
import React from "react";
import Button from "./ui/Button";

function Description() {
  return (
    <div className=' w-screen flex flex-col items-center justify-center bg-cover h-500 xl:h-650 xl:w-1170 xl:bg-xl lg:bg-lg  md:bg-md  sm:bg-sm '>
      <h1 className='font-sans text-heading text-center text-white w-380 sm:w-328 sm:whitespace-break-spaces whitespace-pre-wrap'>Test assignment for front-end developer</h1>
      <p className='font-sans text-body text-center text-white w-380 sm:w-328 mt-21 sm:whitespace-break-spaces whitespace-pre-wrap'>{DESCRIPTION_TEXT} </p>
      <Button
        spacing='mt-8'
        type='button'
        variant='default'>
        Sign up
      </Button>
    </div>
  );
}

export default Description;
