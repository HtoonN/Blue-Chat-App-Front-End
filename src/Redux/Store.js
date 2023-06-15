import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./Reducer/SetAlert";
import loadingReducer from "./Reducer/LoadingReducer";
import alertDialogReducer from "./Reducer/AlertDialogReducer";
import userDataREducer from "./Reducer/UserDataREducer";
import openCloseReducer from "./Reducer/OpenCloseReducer";
import dataReducer from "./Reducer/DataReducer";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    loading: loadingReducer,
    alertDialog: alertDialogReducer,
    userDatas: userDataREducer,
    openClose: openCloseReducer,
    dataReducer: dataReducer,
  },
});

export default store;
