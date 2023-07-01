import { createSlice } from "@reduxjs/toolkit";

export const userDatasReducer = createSlice({
  name: "userDatas",
  initialState: {
    auth: "loading",
    profileDatas: {},
    friendsDatas: {},
    messages: {},
    requested: { nextPage: 1, list: "" },
    blockedList: { nextPage: 1, list: "" },
  },
  reducers: {
    //Profile
    setProfileDatas: (state, action) => {
      state.profileDatas = action.payload;
    },

    //Friend
    setFriendsDatas: (state, action) => {
      state.friendsDatas = action.payload;
    },

    addAddFriend: (state, action) => {
      state.friendsDatas.add.list.push(action.payload);
    },

    removeAddFriend: (state, action) => {
      const result = state.friendsDatas.add.list.filter((element) => {
        return element !== action.payload;
      });
      state.friendsDatas.add.list = result;
    },

    setUnFriend: (state, action) => {
      const result = state.friendsDatas.friends.filter((element) => {
        return element !== action.payload;
      });
      state.friendsDatas.friends = result;
    },

    acceptFriend: (state, action) => {
      const result = state.friendsDatas.requested.list.filter((element) => {
        return element !== action.payload;
      });
      state.friendsDatas.requested.list = result;
      state.friendsDatas.friends.push(action.payload);
    },

    removeRequestedList: (state, action) => {
      const result = state.friendsDatas.requested.list.filter((element) => {
        return element !== action.payload;
      });
      state.friendsDatas.requested.list = result;
    },

    //Messages
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    //Authorization
    setAuth: (state, action) => {
      state.auth = action.payload;
    },

    //Requested
    setRequested: (state, action) => {
      state.requested.list = action.payload.data;
      state.requested.nextPage = action.payload.nextPage;
    },

    removeRequested: (state, action) => {
      const result = state.requested.list.filter((element) => {
        if (element.userId !== action.payload) {
          return element;
        }
      });
      state.requested.list = result;
    },

    addMoreRequested: (state) => {
      //const conc = action.payload.concat(state.requested.list);
      state.requested.list.unshift({
        userId: "add",
        username: "Add Start",
        profileImage: "",
      });
    },

    //blcked
    setBlock: (state, action) => {
      state.blockedList.list = action.payload.data;
      state.blockedList.nextPage = action.payload.nextPage;
    },
  },
});

export const {
  setProfileDatas,
  setFriendsDatas,
  setMessages,
  setAuth,
  addAddFriend,
  removeAddFriend,
  acceptFriend,
  setUnFriend,
  removeRequestedList,
  setRequested,
  removeRequested,
  addMoreRequested,
  setBlock,
} = userDatasReducer.actions;
export default userDatasReducer.reducer;
