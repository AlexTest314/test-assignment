const usersUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
const positionUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
const tokenUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/token";

export const getData = async (page, count) => {
  return await fetch(`${usersUrl}?page=${page}&count=${count}`)
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
};

export const getPositions = async () => {
  return await fetch(positionUrl)
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
};

export const getToken = async () => {
  return await fetch(tokenUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data.token;
      } else {
        // proccess server errors
      }
    });
};

export const postUserData = async (data, token) => {
  return fetch(usersUrl, {
    method: "POST",
    body: data,
    headers: {
      Token: token
      // get token with GET api/v1/token method
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.success) {
        return data.success;
      } else {
        return data;
      }
    })
    .catch(function (error) {
      return error;
    });
};

export const getNewUser = async (id) => {
  return await fetch(`${usersUrl}/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.success) {
        // process success response
      } else {
        // proccess server errors
      }
    });
};
