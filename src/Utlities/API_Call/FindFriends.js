const { default: axios } = require("axios");

const findFriends = async (name) => {
  const url = `${process.env.REACT_APP_API_A}/search_friends_and_groups`;
  const result = await axios({
    method: "GET",
    url,
    withCredentials: true,
    params: {
      name,
    },
  });

  if (result.status === 200) {
    return result.data;
  } else {
    return {
      error: true,
      information: result.statusText,
    };
  }
};

module.exports = findFriends;
