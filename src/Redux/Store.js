import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./Reducer/SetAlert";
import loadingReducer from "./Reducer/SetModel";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    loading: loadingReducer,
  },
});

export default store;
