const checkAuth = () => {
  const isAuth = localStorage.getItem("auth");
  if (isAuth === "true") {
    return true;
  } else {
    return false;
  }
};
export default checkAuth;
