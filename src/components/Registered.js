import Image from "next/image";
import React from "react";
import RegisteredImage from "../img/registered.svg";

const Registered = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-sans text-center text-4xl mt-140 mb-50'>User successfully registered</h1>
      <div className='self-center'>
        <Image
          src={RegisteredImage.src}
          width={328}
          height={290}
          alt='registered image'
        />
      </div>
    </div>
  );
};

export default Registered;
