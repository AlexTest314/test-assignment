import React from "react";

function Card({ photo, name, position, email, phone }) {
  return (
    <div className=' bg-white rounded-xl basis-1/3  sm:mx-4'>
      <div className='m-5 flex justify-center'>
        <img
          src={photo}
          className='w-70 h-70 rounded-full'
          alt='User photo'></img>
      </div>
      <div className='m-5 text-body text-center'>{name}</div>
      <div className='m-5 text-body text-center'>
        <div> {position}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </div>
  );
}

export default Card;
