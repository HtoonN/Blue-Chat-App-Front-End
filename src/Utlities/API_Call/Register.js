import axios from "axios";

const register = async (data, dispatch) => {
  const url = `${process.env.REACT_APP_API_WA}/register`;

  const result = await axios({
    method: "post",
    url: url,
    data: {
      data: {
        username: data.username,
        password: data.password,
        email: data.email,
      },
    },
    withCredentials: true,
  }).catch((error) => {
    return {
      data: {
        error: true,
        data: {
          data: error.message,
        },
      },
    };
  });

  if (!result.data.error) {
    return {
      error: false,
      data: result.data.data,
    };
  } else {
    return {
      error: true,
      information: result.data.data,
    };
  }
};

export default register;
