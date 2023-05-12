"use client";
import React, { useEffect, useState } from "react";
import { getData } from "./helpers/fetchs";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Preloader from "./ui/Preloader";

function Users() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isUpdate, setIsUpdate] = useState(true);

  const showMore = async (page) => {
    setIsUpdate(true);
    setPage((prev) => prev + 1);
    const data = await getData(page, 6);
    const usersData = data.users;
    const newUsers = [...users];
    newUsers.push(...usersData);
    newUsers.sort((prev, cur) => cur.registration_timestamp - prev.registration_timestamp);
    setUsers(newUsers);
    setIsUpdate(false);
  };

  useEffect(() => {
    const data = async () => {
      const usersData = await getData(page, 6);
      setTotalPages(usersData.total_pages);
      const users = usersData.users;
      users.sort((prev, cur) => cur.registration_timestamp - prev.registration_timestamp);
      setUsers(users);
    };

    data();
    setPage((prev) => prev + 1);
    setIsUpdate(false);
  }, []);

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
      {page > totalPages ? null : (
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
