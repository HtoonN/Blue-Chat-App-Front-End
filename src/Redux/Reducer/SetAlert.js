import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    value: false,
    text: "Done",
    header: "Success",
  },

  reducers: {
    setSeen: (state) => {
      state.value = true;
    },

    setUnseen: (state) => {
      state.value = false;
    },

    setAlertOrigin: (state) => {
      state.text = "Done";
      state.header = "Success";
    },

    setText: (state, action) => {
      state.text = action.payload;
    },
    setHeader: (state, action) => {
      state.header = action.payload;
    },
  },
});

export const { setSeen, setUnseen, setText, setHeader, setAlertOrigin } =
  alertSlice.actions;
export default alertSlice.reducer;
