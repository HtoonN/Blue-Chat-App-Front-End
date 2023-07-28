import axios from "axios";
import { addGroupAcceptList } from "../../Redux/Reducer/UserDataREducer";

const getGroupRequestedData = (requested, dispatch, alreadyhaveGroup) => {
  if (requested.length) {
    //Check isAlready
    requested.map((userId) => {
      let isAlready = false;
      alreadyhaveGroup.map((data) => {
        if (data.userId === userId) {
          isAlready = true;
        }
      });

      //call API
      if (!isAlready) {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_A}/get_person_data/${userId}`,
          withCredentials: true,
        })
          .then((res) => {
            if (res.status === 200) {
              dispatch(addGroupAcceptList(res.data.data));
            }
          })
          .catch((e) => {
            console.log(e.response.data);
          });
      }
    });
  }
};
export default getGroupRequestedData;
