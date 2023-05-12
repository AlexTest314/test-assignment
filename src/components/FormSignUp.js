"use client";

import React from "react";
import { Field, Form, Formik } from "formik";
import Button from "./ui/Button";

const inputTypes = {
  default: "bg-transparent text-black/[0.87] border-bordercolor border h-14 w-96 rounded-md mt-12 pl-4 pr-4 pt-3 pb-3 focus:border focus:border-bordercolor focus:outline-none",
  error: "bg-transparent text-black/[0.87] border-2 border-error h-14 w-96 rounded-md pl-4 pr-4 pt-3 pb-3 focus:border-2 focus:border-error focus:outline-none"
};

const labelTypes = {
  default: "text-inputvalue text-xs absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1",
  error: "text-xs text-error absolute left-4 -top-2 bg-background h-4 max-w-20 pl-1 pr-1"
};
const helperTypes = {
  default: "text-xs ml-4 mt-1 text-inputvalue",
  error: "text-xs ml-4 mt-1 text-error"
};

const FormSignUp = () => {
  return (
    <div>
      <h1 className='font-sans text-center text-4xl mt-40 mb-12'>Working with GET request</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: ""
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        <Form className='flex flex-col'>
          <label
            htmlFor='name'
            className={labelTypes["default"]}>
            First Name
          </label>
          <Field
            className={inputTypes["default"]}
            id='name'
            name='name'
            placeholder='Your name'
          />
          <label
            htmlFor='email'
            className={labelTypes["default"]}>
            Email
          </label>
          <Field
            className={inputTypes["default"]}
            id='email'
            name='email'
            placeholder='Email'
            type='email'
          />

          <label
            htmlFor='phone'
            className={labelTypes["default"]}>
            Last Name
          </label>
          <Field
            className={inputTypes["default"]}
            id='phone'
            name='phone'
            placeholder='Phone'
          />

          <Button
            variant='default'
            type='submit'>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormSignUp;

{
  /* <Form>
      <h1 className='text-center text-4xl mt-40 mb-12'>Working with GET request</h1>
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
    </Form> */
}
