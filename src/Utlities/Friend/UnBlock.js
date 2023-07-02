import axios from "axios";
import { removeBlock } from "../../Redux/Reducer/UserDataREducer";

const unBlock = (userId, dispatch, btnDisabled) => {
  btnDisabled(true);
  if (userId) {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/unblock_user`,
      data: {
        data: {
          friendId: userId,
        },
      },
      withCredentials: true,
    })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          dispatch(removeBlock(userId));
          btnDisabled(false);
        }
      })
      .catch((e) => {
        console.log(e.respond.data);
        btnDisabled(false);
      });
  }
};
export default unBlock;
