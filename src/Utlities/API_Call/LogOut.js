import axios from "axios";

const logout = async (dispatch) => {
  const result = await axios({
    method: "delete",
    url: "http://localhost:3001/api/v1/account/user/logout",
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
