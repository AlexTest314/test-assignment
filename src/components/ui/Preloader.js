import Image from "next/image";
import React from "react";
import PreloaderImg from "../../img/preloader.svg";

const Preloader = () => {
  return (
    <div className='self-center'>
      <Image
        width={48}
        height={48}
        className='animate-spin h-12 w-12'
        src={PreloaderImg.src}
        alt='Preloader'
      />
    </div>
  );
};

export default Preloader;
