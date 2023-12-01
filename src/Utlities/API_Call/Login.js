import axios from "axios";

const login = async (email, password) => {
  const url = `${process.env.REACT_APP_API_WA}/login`;

  const result = await axios({
    method: "post",
    url: url,
    data: {
      data: {
        password: password,
        email: email,
      },
    },
    withCredentials: true,
  }).catch((error) => {
    return {
      data: {
        ...error.response.data,
      },
    };
  });

  if (result.status === 200) {
    console.log(result);
    return {
      error: false,
      data: result,
    };
  } else {
    return {
      error: true,
      information: result.data.information,
    };
  }
};

export default login;
