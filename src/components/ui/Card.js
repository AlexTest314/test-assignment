import Tooltips from "./Tooltips";
import Image from "next/image";
import React, { useState } from "react";
import NoImage from "../../img/no-image.svg";

function Card({ photo, name, position, email, phone }) {
  const [isHover, setIsHover] = useState(false);

  console.log(email.length);

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
      <div className='m-5 text-body text-center  truncate font-sans'>
        {name}
        {isHover && name.length > 44 && <Tooltips>{name}</Tooltips>}
      </div>
      <div className='m-5 text-body text-center  font-sans'>
        <div className='truncate font-sans'>{position}</div>
        <div
          className='truncate font-sans '
          onMouseEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsHover(true);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsHover(false);
          }}>
          {email}
          {isHover && email.length > 44 && <Tooltips>{email}</Tooltips>}
        </div>
        <div className='truncate font-sans '>{phone}</div>
      </div>
    </div>
  );
}

export default Card;
