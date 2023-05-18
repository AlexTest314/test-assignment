const usersUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/users?";
const positionUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
const tokenUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/token";
const userIdUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/users/";

export const getData = async (page, count) => {
  const users = await fetch(`${usersUrl}page=${page}&count=${count}`)
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
  const positions = await fetch(positionUrl)
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

export const getToken = async () => {
  const token = await fetch(tokenUrl)
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
  return token;
};

export const postUserData = async (data, token) => {
  const formDataPost = new FormData();

  formDataPost.append("position_id", data.position_id);
  formDataPost.append("name", data.name);
  formDataPost.append("email", data.email);
  formDataPost.append("phone", data.phone);
  formDataPost.append("photo", data.photo[0]);

  const result = fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    method: "POST",
    body: formDataPost,
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
        // proccess server errors
      }
    })
    .catch(function (error) {
      // proccess network errors
    });
  return result;
};

export const getNewUser = async (id) => {
  const users = await fetch(`${userIdUrl}${id}`)
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
  return users;
};
