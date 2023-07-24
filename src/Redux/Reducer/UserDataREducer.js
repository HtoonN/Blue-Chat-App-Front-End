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
    addedList: { nextPage: 1, list: "" },
    friendsList: { nextPage: 1, list: [] },
    notiList: { nextPage: 1, list: [] },
    messagedFriendsList: { nextPage: 1, list: [] },
    chatFriend: { data: "", status: "" },
    selectedUser: { status: "", id: "" },
    addedGroupList: { nextPage: 1, list: [] },
    groupListDatas: { nextPage: 1, list: [] },
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

      if (Array.isArray(state.addedList.list)) {
        const result2 = state.addedList.list.filter((element) => {
          if (element.userId !== action.payload) {
            return element;
          }
        });
        state.addedList.list = result2;
      }
    },

    setUnFriend: (state, action) => {
      const result = state.friendsDatas.friends.filter((element) => {
        return element !== action.payload;
      });
      state.friendsDatas.friends = result;

      const result2 = state.friendsList.list.filter((element) => {
        if (element.userId !== action.payload) {
          return element;
        }
      });

      state.friendsList.list = result2;
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
      if (Array.isArray(state.requested.list)) {
        const result = state.requested.list.filter((element) => {
          if (element.userId !== action.payload) {
            return element;
          }
        });
        state.requested.list = result;
      }

      const result2 = state.friendsDatas.requested.list.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.requested.list = result2;
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

    removeBlock: (state, action) => {
      const result1 = state.blockedList.list.filter((element) => {
        if (element.userId !== action.payload) {
          return element;
        }
      });
      state.blockedList.list = result1;

      const result = state.friendsDatas.blockedFriends.blockedList.filter(
        (element) => {
          if (element !== action.payload) {
            return element;
          }
        }
      );
      state.friendsDatas.blockedFriends.blockedList = result;
    },

    addBlockList: (state, action) => {
      state.friendsDatas.blockedFriends.blockedList.push(action.payload);

      if (Array.isArray(state.requested.list)) {
        const requestedResult = state.requested.list.filter((element) => {
          if (element.userId !== action.payload) {
            return element;
          }
        });
        state.requested.list = requestedResult;
      }

      if (Array.isArray(state.addedList.list)) {
        const addedResult = state.addedList.list.filter((element) => {
          if (element.userId !== action.payload) {
            return element;
          }
        });
        state.addedList.list = addedResult;
      }

      const addResult = state.friendsDatas.add.list.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.add.list = addResult;

      const reqResult = state.friendsDatas.requested.list.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.requested.list = reqResult;

      const friendResult = state.friendsDatas.friends.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.friends = friendResult;

      const messagedFriendsResult =
        state.friendsDatas.messagedFriends.friendsList.filter((element) => {
          if (element !== action.payload) {
            return element;
          }
        });

      state.friendsDatas.messagedFriends.friendsList = messagedFriendsResult;

      const resultFL = state.friendsList.list.filter((element) => {
        if (element.userId !== action.payload) {
          return element;
        }
      });

      state.friendsList.list = resultFL;
    },

    //added
    setAddedList: (state, action) => {
      state.addedList.list = action.payload.data;
      state.addedList.nextPage = action.payload.nextPage;
    },

    removeAddedList: (state, action) => {
      const result = state.addedList.list.filter((element) => {
        if (element.userId !== action.payload) {
          return element;
        }
      });
      state.addedList.list = result;
    },

    //FriendsList
    setFriendsList: (state, action) => {
      let isHas = false;
      state.friendsList.list.map((arr) => {
        if (arr.userId === action.payload.userId) {
          isHas = true;
        }
      });
      if (!isHas) {
        state.friendsList.list.push(action.payload);
      }
    },

    removeFriendList: (state, action) => {
      const result = state.friendsList.list.filter((element) => {
        if (element.userId !== action.payload) {
          return element;
        }
      });

      state.friendsList.list = result;
    },

    //Noti
    setNotiList: (state, action) => {
      state.notiList.list = action.payload.data;
      state.notiList.nextPage = action.payload.nextPage;
    },

    addMoreNotiList: (state, action) => {
      state.notiList.nextPage = action.payload.nextPage;
      const addArray = state.notiList.list.concat(action.payload.data);
      state.notiList.list = addArray;
    },
    setNotiItemSeen: (state, action) => {
      state.notiList.list[action.payload.index].seen = true;
    },

    addNotiNo: (state) => {
      state.notiList.no = state.notiList.no + 1;
    },
    setNotiZero: (state) => {
      state.notiList.no = 0;
    },

    //Messaged Friends
    setMessagedFriendList: (state, action) => {
      state.messagedFriendsList.nextPage = action.payload.nextPage;
      state.messagedFriendsList.list = action.payload.data;
    },

    addMessagedFriend: (state, action) => {
      state.friendsDatas.messagedFriends.friendsList.push(action.payload);
    },

    //Chat Friend
    setChatFriend: (state, action) => {
      state.chatFriend = action.payload;
    },

    //Set selected
    setSelectedUser: (state, action) => {
      state.selectedUser.id = action.payload.id;
      state.selectedUser.status = action.payload.status;
      state.chatFriend.data = action.payload.data;
      state.chatFriend.status = action.payload.owner;
    },

    //setAdded
    addAddedGroup: (state, action) => {
      state.friendsDatas.add.groups.push(action.payload);
    },

    //addGroupList
    addAddedGroupList: (state, action) => {
      let isHas = false;
      state.addedGroupList.list.map((arr) => {
        if (arr.groupId === action.payload.groupId) {
          isHas = true;
        }
      });
      if (!isHas) {
        state.addedGroupList.list.push(action.payload);
      }
    },

    cancelAddedGroup: (state, action) => {
      const arr = state.friendsDatas.add.groups.filter((id) => {
        return id !== action.payload;
      });
      state.friendsDatas.add.groups = arr;

      const arr2 = state.addedGroupList.list.filter((obj) => {
        if (obj.groupId !== action.payload) {
          return obj;
        }
      });
      state.addedGroupList.list = arr2;
    },

    setGroupListDatas: (state, action) => {
      let isHas = false;
      state.groupListDatas.list.map((arr) => {
        if (arr.groupId === action.payload.groupId) {
          isHas = true;
        }
      });
      if (!isHas) {
        state.groupListDatas.list.push(action.payload);
      }
    },

    //GroupList
    addGroupListAsOwner: (state, action) => {
      state.profileDatas.groups.push({
        id: action.payload.groupId,
        status: "owner",
      });
      state.groupListDatas.list.unshift(action.payload);
    },

    deleteGroupR: (state, action) => {
      const result = state.profileDatas.groups.filter((groupInfo) => {
        if (groupInfo.id !== action.payload) {
          return groupInfo;
        }
      });

      state.profileDatas.groups = result;

      const resGroup = state.groupListDatas.list.filter((groupDatas) => {
        if (groupDatas.groupId !== action.payload) {
          return groupDatas;
        }
      });

      state.groupListDatas.list = resGroup;
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
  removeBlock,
  addBlockList,
  setAddedList,
  removeAddedList,
  setFriendsList,
  removeFriendList,
  setEmptyFriendsList,
  setNotiList,
  addMoreNotiList,
  setNotiItemSeen,
  addNotiNo,
  setNotiZero,
  setChatFriend,
  addMessagedFriend,
  setMessagedFriendList,
  setSelectedUser,
  addAddedGroup,
  addAddedGroupList,
  cancelAddedGroup,
  setGroupListDatas,
  addGroupListAsOwner,
  deleteGroupR,
} = userDatasReducer.actions;
export default userDatasReducer.reducer;
