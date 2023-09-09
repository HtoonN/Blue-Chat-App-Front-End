import setAlertFun from "./SetAlertFun";

const notiActive = (dispatch, message, header, sender) => {
  if (localStorage.getItem("selectedId") !== sender) {
    setAlertFun(dispatch, message, header);
  }
};
export default notiActive;
