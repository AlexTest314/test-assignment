"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import RadioSection from "./RadioSection";
import InputFile from "./ui/InputFile";
import { getPositions, getToken, postUserData } from "@/helpers/requests";
import { userFormValidation } from "@/helpers/form/validate";
import {toFormData} from "@/helpers/form/changeToFormData"

const FormSignUp = ({setIsRegistered}) => {
  const [positions, setPositions] = useState([]);

  const { register, watch, formState:{isValid, errors}, handleSubmit } = useForm({ mode: "onChange" });


  const onSubmit = async(data) => {
    
    /* const readyData = toFormData(data)
    console.log('readyData', readyData) */
    const token = await getToken()

    
    if(token)  {
      setIsRegistered( await postUserData(data, token))
    } 
    
     
 
  };

  useEffect(() => {
    const position = async () => {
      const positions = await getPositions();
      setPositions(positions);
    };
    position();
  }, []);

  return (
    <div>
      <h1 className='font-sans text-center text-4xl mt-140 mb-18'>Working with GET request</h1>

      <form
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}>
        <Input
        watch={watch}
          register={register}
          name='name'
          type='name'
          kind='Your name'
          error={errors.name?.message}
        />

        <Input
        watch={watch}
        name='email'
          register={register}
          type='email'
          kind='Email'
          error={errors.email?.message}
        />

        <Input
        watch={watch}
          register={register}
          name='phone'
          type='phone'
          kind='Phone'
          error={errors.phone?.message}
        />

        <RadioSection
        watch={watch}
        name='position_id'
        checkInput= {...register(
          "position_id", userFormValidation.position_id
        )}
        error={errors.position_id?.message}
          positions={positions}
        />

        <InputFile name='photo' watch={watch} register={register} error={errors.photo?.message}/>

        <Button
          spacing='self-center mt-8 mb-100'
          variant={isValid ? "default" : "disable"}
          disable={!isValid}
          type='submit'>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default FormSignUp;
