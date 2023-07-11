import axios from "axios";
import { setAddedList } from "../../Redux/Reducer/UserDataREducer";

const getAddedUsers = async (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/get_all_added_users/1`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(
          setAddedList({
            data: result.data.data,
            nextPage: result.data.metadata.nextPage,
          })
        );
      }
    })
    .catch((e) => {
      dispatch(
        setAddedList({
          data: [],
          nextPage: false,
        })
      );
      console.log(e.response.data);
    });
};
export default getAddedUsers;
