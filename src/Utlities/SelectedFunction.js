import {
  setSelectedUser,
} from "../Redux/Reducer/UserDataREducer";

const selectFunction = (selectId, status, dispatch, data, owner) => {
  localStorage.setItem("selectedId", selectId);
  dispatch(
    setSelectedUser({ id: selectId, status: status, data: data, owner: owner })
  );
   
};

export default selectFunction;
