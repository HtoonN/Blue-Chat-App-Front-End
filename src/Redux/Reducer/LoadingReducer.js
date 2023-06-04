import { createSlice } from "@reduxjs/toolkit";

export const loadingReducer = createSlice({
  name: "loading",
  initialState: {
    success: false,
    seen: false,
    title: "Title",
  },
  reducers: {
    setLoadingSeen: (state) => {
      state.seen = true;
    },
    setLoadingUnseen: (state) => {
      state.seen = false;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSuccess: (state) => {
      state.success = true;
    },
    setUnsuccess: (state) => {
      state.success = false;
    },
  },
});

export const {
  setLoadingSeen,
  setLoadingUnseen,
  setTitle,
  setSuccess,
  setUnsuccess,
} = loadingReducer.actions;
export default loadingReducer.reducer;
