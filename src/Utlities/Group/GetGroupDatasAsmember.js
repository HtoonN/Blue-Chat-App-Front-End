import axios from "axios";
import { setGroupListDatas } from "../../Redux/Reducer/UserDataREducer";

const getGroupDatasAsMember = (groupId, status, dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/get_group_data/${groupId}/${status}`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(setGroupListDatas(result.data.data[0]));
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export default getGroupDatasAsMember;
