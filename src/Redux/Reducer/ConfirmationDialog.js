import { createSlice } from "@reduxjs/toolkit";

const confirmationDialog = createSlice({
  name: "confirmationDialog",
  initialState: {
    open: false,
    header: "Header",
    body: "Discription",
    acceptFun: "",
    data: "",
  },
  reducers: {
    setOpenCD: (state) => {
      state.open = !state.open;
    },
    setHeader: (state, action) => {
      state.header = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setAcceptFun: (state, action) => {
      state.acceptFun = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAcceptFun, setOpenCD, setBody, setHeader, setData } =
  confirmationDialog.actions;
export default confirmationDialog.reducer;
