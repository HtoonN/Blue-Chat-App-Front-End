import { createSlice } from "@reduxjs/toolkit";

export const loadingReducer = createSlice({
  name: "alert",
  initialState: {
    seen: false,
    information: "Model",
    title: "Title",
  },
  reducers: {
    setSeen: (state) => {
      state.seen = true;
    },
    setUnseen: (state) => {
      state.seen = false;
    },
    setInformation: (state, action) => {
      state.information = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setSeen, setUnseen, setInformation, setTitle } =
  loadingReducer.actions;
export default loadingReducer.reducer;
