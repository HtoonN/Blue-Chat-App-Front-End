import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    value: false,
    text: "Alert",
  },

  reducers: {
    setSeen: (state) => {
      state.value = true;
    },
    setUnseen: (state) => {
      state.value = false;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setSeen, setUnseen, setText, doAction } = alertSlice.actions;
export default alertSlice.reducer;
