import { createSlice } from "@reduxjs/toolkit";

export const alertDialogReducer = createSlice({
  name: "alertdialog",
  initialState: {
    seen: false,
    body: "Alert",
    header: "Title",
  },

  reducers: {
    setAlertDialogSeen: (state) => {
      state.seen = true;
    },
    setAlertDialogUnseen: (state) => {
      state.seen = false;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setHeader: (state, action) => {
      state.header = action.payload;
    },
  },
});

export const { setAlertDialogSeen, setAlertDialogUnseen, setBody, setHeader } =
  alertDialogReducer.actions;
export default alertDialogReducer.reducer;
