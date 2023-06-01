const registerControl = ({ username, password, email, rePassword }) => {
  if (username && password && email && rePassword) {
    if (password === rePassword) {
      console.log("Sending data to data base and get result");

      return {
        error: false,
        information: "Success !",
      };
    }
  } else {
    return {
      error: true,
      information: "You have to fill all fields",
    };
  }
};

module.exports = registerControl;
