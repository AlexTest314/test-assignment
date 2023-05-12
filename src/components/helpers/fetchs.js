export const getData = async (page, count) => {
  const users = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.success) {
        return data.users;
      } else {
        // proccess server errors
      }
    });
  return users;
};
