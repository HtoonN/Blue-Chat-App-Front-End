import axios from "axios";
import { setBlock } from "../../Redux/Reducer/UserDataREducer";

const getBlockedList = async (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/get_all_blocked_users/1`,
    withCredentials: true,
  })
    .then((result) => {
      console.log(result);
      if (result.status === 200) {
        dispatch(
          setBlock({
            data: result.data.data,
            nextPage: result.data.metadata.nextPage,
          })
        );
      }
    })
    .catch((e) => {
      dispatch(
        setBlock({
          data: [],
          nextPage: false,
        })
      );
      console.log(e.response.data);
    });
};
export default getBlockedList;
