export const getData = async (page, count) => {
  const users = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data;
      } else {
        // proccess server errors
      }
    });
  return users;
};
export const getPositions = async () => {
  const positions = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data.positions;
      } else {
        // proccess server errors
      }
    });
  return positions;
};
