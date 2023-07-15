import axios from "axios";
import { addAddedGroupList } from "../../Redux/Reducer/UserDataREducer";

const getAddedGroup = (arr, dispatch) => {
  if (arr.length) {
    arr.map((groupId) => {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_group_info/${groupId}`,
        withCredentials: true,
      })
        .then((result) => {
          if (result.status === 200) {
            dispatch(addAddedGroupList(result.data));
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    });
  }
};
export default getAddedGroup;
