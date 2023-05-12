import Image from "next/image";
import React from "react";
import Logo from "../img/logo.svg";
import Button from "./ui/Button";

function Header() {
  return (
    <div className='w-screen bg-white flex h-16 justify-center'>
      <div className='xl:w-1170 lg:w-1024 lg:px-60 md:w-768 md:px-8 sm:w-360 sm:px-4 flex justify-between'>
        <Image
          src={Logo.src}
          width={104}
          height={26}
          alt='logo image'
        />

        <div className='w-210 flex  justify-between self-center'>
          <Button
            type='button'
            variant='default'>
            Users
          </Button>
          <Button
            type='button'
            variant='default'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
