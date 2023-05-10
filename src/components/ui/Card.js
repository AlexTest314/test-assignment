import React from "react";

function Card() {
  const way = "Leading specialist of the department of cent...";
  const email = "frontend_develop@gmail.com";
  const phone = "+38 (098) 278 44 24";

  return (
    <div className='max-w-96 bg-white rounded-xl'>
      <div className='m-5 flex justify-center'>
        <img
          className='w-16 h-16 rounded-full'
          alt='User photo'></img>
      </div>
      <div className='m-5 text-center'>Takamaru Ayako Jurrien</div>
      <div className='m-5 text-center'>
        <div> {way}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </div>
  );
}

export default Card;
