import axios from "axios";

const logout = async () => {
  const url = `${process.env.REACT_APP_API_A}/logout`;

  const result = await axios({
    method: "delete",
    url,
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

  if (result.status === 200) {
    return {
      error: false,
    };
  } else {
    return {
      error: true,
      information: result.data.data.data,
    };
  }
};
export default logout;
