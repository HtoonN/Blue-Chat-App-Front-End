import { createSlice } from "@reduxjs/toolkit";

export const userDatasReducer = createSlice({
  name: "userDatas",
  initialState: {
    name: "mg mg",
    profileDatas: {},
    friendsDatas: {},
    messages: {},
  },
  reducers: {
    setProfileDatas: (state, action) => {
      state.profileDatas = action.payload;
    },

    setFriendsDatas: (state, action) => {
      state.friendsDatas = action.payload;
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setProfileDatas, setFriendsDatas, setMessages } =
  userDatasReducer.actions;
export default userDatasReducer.reducer;
