"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import Radiobutton from "./ui/Radiobutton";
import Input from "./ui/Input";
import RadioSection from "./RadioSection";
import TextArea from "./ui/TextArea";

const FormSignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h1 className='font-sans text-center text-4xl mt-40 mb-12'>Working with GET request</h1>

      <form className='flex flex-col'>
        <Input
          spacing='mt-12'
          variant='default'
          type='text'
          kind='Your name'
        />
        <Input
          spacing='mt-12'
          variant='default'
          type='email'
          kind='Email'
        />
        <Input
          spacing='mt-12'
          variant='default'
          type='phone'
          kind='Phone'
        />
        <RadioSection
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
        <TextArea variant='default' />

        <Button
          spacing='self-center mt-8'
          variant='disable'
          type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormSignUp;
