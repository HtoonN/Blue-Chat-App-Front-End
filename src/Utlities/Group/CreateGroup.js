import axios from "axios";
import { addGroupListAsOwner } from "../../Redux/Reducer/UserDataREducer";
import setAlertFun from "../SetAlertFun";

const createGroupFun = ({
  groupName,
  groupType,
  handleClose,
  dispatch,
  setBtnCreate,
  setGroupName,
}) => {
  setBtnCreate(true);
  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_A}/create_group`,
    data: {
      data: {
        name: groupName,
        type: groupType,
      },
    },
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(addGroupListAsOwner(res.data.data));
        setAlertFun(dispatch, "Group Created");
        setGroupName("");
        setBtnCreate(false);
        handleClose();
      } else {
        setBtnCreate(false);
      }
    })
    .catch((e) => {
      console.log(e.response.data);
      setBtnCreate(false);
    });
};

export default createGroupFun;
