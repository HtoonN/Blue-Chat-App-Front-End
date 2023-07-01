import { createSlice } from "@reduxjs/toolkit";

export const openCloseReducer = createSlice({
  name: "openClose",
  initialState: {
    friendListSideBar: false,
    findFriendsModel: false,
    friendRequestModel: false,
    blockedListModel: false,
  },
  reducers: {
    setFriendListSideBar: (state) => {
      state.friendListSideBar = !state.friendListSideBar;
    },
    setFindFriendsModel: (state) => {
      state.findFriendsModel = !state.findFriendsModel;
    },
    setFriendRequestModel: (state) => {
      state.friendRequestModel = !state.friendRequestModel;
    },
    setBlockListModel: (state) => {
      state.blockedListModel = !state.blockedListModel;
    },
  },
});

export const {
  setFriendListSideBar,
  setFindFriendsModel,
  setFriendRequestModel,
  setBlockListModel,
} = openCloseReducer.actions;

export default openCloseReducer.reducer;
