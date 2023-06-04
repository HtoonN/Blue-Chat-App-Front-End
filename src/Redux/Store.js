import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./Reducer/SetAlert";
import loadingReducer from "./Reducer/LoadingReducer";
import alertDialogReducer from "./Reducer/AlertDialogReducer";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    loading: loadingReducer,
    alertDialog: alertDialogReducer,
  },
});

export default store;
