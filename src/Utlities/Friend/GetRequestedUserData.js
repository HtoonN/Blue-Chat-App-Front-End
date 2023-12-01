import axios from "axios";
import { setRequested } from "../../Redux/Reducer/UserDataREducer";

const getRequestedUserData = (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/get_all_requested_users/1`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(
          setRequested({
            data: result.data.data,
            nextPage: result.data.metadata.nextPage,
          })
        );
      }
    })
    .catch((e) => {
      console.log(e.response.data);
      dispatch(
        setRequested({
          data: [],
          nextPage: false,
        })
      );
    });
};
export default getRequestedUserData;
