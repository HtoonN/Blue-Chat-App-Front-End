import { createSlice } from "@reduxjs/toolkit";

export const openCloseReducer = createSlice({
  name: "openClose",
  initialState: {
    friendListSideBar: false,
    findFriendsModel: false,
    friendRequestModel: false,
    blockedListModel: false,
    addedListModel: false,
    notiMenuModel: false,
    notiMenuMobileModel: false,
    createGroupModel: false,
    manageGroupMembersModel: false,
    seeGroupMemberModel: false,
    profileModel: false,
    groupProfileModel: false,
    scroll: false,
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
    setAddedListModel: (state) => {
      state.addedListModel = !state.addedListModel;
    },
    setNotiMenuModel: (state) => {
      state.notiMenuModel = !state.notiMenuModel;
    },
    setNotiMenuMobileModel: (state) => {
      state.notiMenuMobileModel = !state.notiMenuMobileModel;
    },
    setCreateGroupModel: (state) => {
      state.createGroupModel = !state.createGroupModel;
    },
    setManageGroupMembersModel: (state) => {
      state.manageGroupMembersModel = !state.manageGroupMembersModel;
    },
    setSeeGroupMemberModel: (state) => {
      state.seeGroupMemberModel = !state.seeGroupMemberModel;
    },
    setProfileModel: (state) => {
      state.profileModel = !state.profileModel;
    },
    setGroupProfileModel: (state) => {
      state.groupProfileModel = !state.groupProfileModel;
    },
    setScroll: (state) => {
      state.scroll = !state.scroll;
    },
  },
});

export const {
  setFriendListSideBar,
  setFindFriendsModel,
  setFriendRequestModel,
  setBlockListModel,
  setAddedListModel,
  setNotiMenuModel,
  setNotiMenuMobileModel,
  setCreateGroupModel,
  setManageGroupMembersModel,
  setSeeGroupMemberModel,
  setProfileModel,
  setGroupProfileModel,
  setScroll,
} = openCloseReducer.actions;

export default openCloseReducer.reducer;
