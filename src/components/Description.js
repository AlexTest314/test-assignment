import React from "react";
import Button from "./ui/Button";

function Description() {
  return (
    <div className=' w-screen flex flex-col items-center justify-center bg-cover h-500 xl:h-650 xl:w-1170 xl:bg-xl lg:bg-lg  md:bg-md  sm:bg-sm '>
      <h1 className=' text-heading text-center text-white w-380 sm:w-328 sm:whitespace-break-spaces whitespace-pre-wrap'>Test assignment for front-end developer</h1>
      <p className='text-body text-center text-white w-380 sm:w-328 mt-21 sm:whitespace-break-spaces whitespace-pre-wrap'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving. </p>
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
