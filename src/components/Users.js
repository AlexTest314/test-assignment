"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";

function Users() {
  const [users, setUsers] = useState([]);
  console.log("users", users);
  useEffect(() => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.success) {
          setUsers(data.users);
        } else {
          // proccess server errors
        }
      });
  }, []);

  return (
    <div className='w-screen flex flex-col xl:w-1170  lg:px-60  md:px-8  sm:px-4'>
      <h1 className='text-center text-heading mt-140 mb-50 sm:w-328 sm:whitespace-break-spaces whitespace-pre-wrap'>Working with GET request</h1>
      <div className='grid grid-cols-3 gap-29  md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-y-5 '>
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              position={user.position}
              name={user.name}
              phone={user.phone}
              email={user.email}
              photo={user.photo}
            />
          );
        })}
      </div>
      <Button
        spacing='mt-12 self-center'
        type='button'
        variant='more'>
        Show more
      </Button>
    </div>
  );
}

export default Users;
