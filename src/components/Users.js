"use client";
import { getData } from "@/helpers/requests";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Preloader from "./ui/Preloader";

function Users({ isRegistered }) {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isUpdate, setIsUpdate] = useState(true);

  const showMore = async (page) => {
    setIsUpdate(true);
    setPage((prev) => prev + 1);
    const data = await getData(page, 6);
    const newUsers = [...users];
    newUsers.push(...data.users);
    newUsers.sort((prev, cur) => cur.registration_timestamp - prev.registration_timestamp);
    setUsers(newUsers);
    setIsUpdate(false);
  };

  useEffect(() => {
    const updateUsersData = async () => {
      const usersData = await getData(1, 6);
      setTotalPages(usersData.total_pages);
      const users = usersData.users.sort((prev, cur) => cur.registration_timestamp - prev.registration_timestamp);
      setUsers(users);
    };

    updateUsersData();
    if (isRegistered) {
      setPage(1);
    }
    setPage((prev) => prev + 1);
    setIsUpdate(false);
  }, [isRegistered]);

  return (
    <div className='w-screen flex flex-col xl:w-1170  lg:px-60  md:px-8  sm:px-4'>
      <h1 className='text-center text-heading mt-140 mb-50 sm:w-328 sm:whitespace-break-spaces whitespace-pre-wrap'>Working with GET request</h1>
      {isUpdate ? (
        <Preloader />
      ) : (
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
      )}
      {page < totalPages && (
        <Button
          spacing='mt-12 self-center'
          type='button'
          variant='more'
          onClick={() => showMore(page)}>
          Show more
        </Button>
      )}
    </div>
  );
}

export default Users;
