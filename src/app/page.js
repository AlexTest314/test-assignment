"use client";
import Description from "@/components/Description";
import FormSignUp from "@/components/FormSignUp";
import Header from "@/components/Header";
import Users from "@/components/Users";
import { useState } from "react";
import Registered from "@/components/Registered";

export default function Home() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <Description />
      <Users isRegistered={isRegistered} />
      {isRegistered ? <Registered /> : <FormSignUp setIsRegistered={setIsRegistered} />}
    </main>
  );
}
