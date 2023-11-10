import { setGetPasswordForAccountDeactivation } from "../../../Redux/Reducer/OpenCloseReducer";

const deleteAccount = (dispatch, data) => {
  dispatch(setGetPasswordForAccountDeactivation());
};

export default deleteAccount;
