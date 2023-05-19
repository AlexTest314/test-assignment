import Image from "next/image";
import React from "react";
import NoImage from "../../img/no-image.svg";

function Card({ photo, name, position, email, phone }) {
  if (photo.includes("placeholder")) {
    photo = NoImage.src;
  }

  return (
    <div className=' bg-white rounded-xl basis-1/3  sm:mx-4'>
      <div className='m-5 flex justify-center'>
        <Image
          width={70}
          height={70}
          src={photo}
          className='w-70 h-70 rounded-full'
          alt='User photo'
        />
      </div>
      <div className='m-5 text-body text-center truncate font-sans'>{name}</div>
      <div className='m-5 text-body text-center font-sans'>
        <div className='truncate font-sans'>{position}</div>
        <div className='truncate font-sans'>{email}</div>
        <div className='truncate font-sans'>{phone}</div>
      </div>
    </div>
  );
}

export default Card;
