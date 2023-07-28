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
    groupMembersList: {
      members: [],
      accept: [],
      add: [],
    },
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
      //add to block list
      state.friendsDatas.blockedFriends.blockedList.push(action.payload);

      //remove from requested
      if (Array.isArray(state.requested.list)) {
        const requestedResult = state.requested.list.filter((element) => {
          if (element.userId !== action.payload) {
            return element;
          }
        });
        state.requested.list = requestedResult;
      }

      //remove from added
      if (Array.isArray(state.addedList.list)) {
        const addedResult = state.addedList.list.filter((element) => {
          if (element.userId !== action.payload) {
            return element;
          }
        });
        state.addedList.list = addedResult;
      }

      //remove from add (id)
      const addResult = state.friendsDatas.add.list.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.add.list = addResult;

      //remove from requested (id)
      const reqResult = state.friendsDatas.requested.list.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.requested.list = reqResult;

      //remove from friend (id)
      const friendResult = state.friendsDatas.friends.filter((element) => {
        if (element !== action.payload) {
          return element;
        }
      });

      state.friendsDatas.friends = friendResult;

      //reomve from messagedFriend (id)
      const messagedFriendsResult =
        state.friendsDatas.messagedFriends.friendsList.filter((element) => {
          if (element !== action.payload) {
            return element;
          }
        });

      state.friendsDatas.messagedFriends.friendsList = messagedFriendsResult;

      //remove from friendList (Id)
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

    addMessagedFriendList: (state, action) => {
      let isHas = false;
      state.messagedFriendsList.list.filter((obj) => {
        if (obj.userId === action.payload.userId) {
          isHas = true;
        }
      });

      if (!isHas) {
        state.messagedFriendsList.list.push(action.payload);
      }
    },

    addMessagedFriend: (state, action) => {
      state.friendsDatas.messagedFriends.friendsList.push(action.payload);
    },

    removeMessagedFriend: (state, action) => {
      const result = state.friendsDatas.messagedFriends.friendsList.filter(
        (userId) => {
          if (userId !== action.payload) {
            return userId;
          }
        }
      );
      state.friendsDatas.messagedFriends.friendsList = result;

      const result2 = state.messagedFriendsList.list.filter((data) => {
        if (data.userId !== action.payload) {
          return data;
        }
      });

      state.messagedFriendsList.list = result2;
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
      state.groupMembersList = {
        members: [],
        accept: [],
        add: [],
      };
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

    addGroupMember: (state, action) => {
      let get = false;
      let i = 0;

      while (!get && state.groupListDatas.list.length > i) {
        if (state.groupListDatas.list[i].groupId === action.payload.groupId) {
          state.groupListDatas.list[i].members.memberList.push(
            action.payload.userId
          );
          state.groupListDatas.list[i].members.totalMember =
            parseInt(state.groupListDatas.list[i].members.totalMember, 10) + 1;
          state.chatFriend.data.members.totalMember =
            parseInt(state.chatFriend.data.members.totalMember, 10) + 1;
          get = true;
        } else {
          i++;
        }
      }
    },

    decreaseTotalGroupMemberFromGroup: (state, action) => {
      let get = false;
      let i = 0;

      while (!get && state.groupListDatas.list.length > i) {
        if (state.groupListDatas.list[i].groupId === action.payload) {
          state.groupListDatas.list[i].members.totalMember =
            parseInt(state.groupListDatas.list[i].members.totalMember, 10) - 1;
          get = true;
        } else {
          i++;
        }
      }
    },

    //groupMemberList
    addGroupMemberList: (state, action) => {
      let isHas = false;
      state.groupMembersList.members.map((data) => {
        if (data.userId === action.payload.userId) {
          isHas = true;
        }
      });
      if (!isHas) {
        state.groupMembersList.members.push(action.payload);
      }
    },

    addGroupAcceptList: (state, action) => {
      let isHas = false;
      state.groupMembersList.accept.map((data) => {
        if (data.userId === action.payload.userId) {
          isHas = true;
        }
      });
      if (!isHas) {
        state.groupMembersList.accept.push(action.payload);
      }
    },

    removeGroupAcceptList: (state, action) => {
      const result = state.groupMembersList.accept.filter((obj) => {
        if (obj.userId !== action.payload.userId) {
          return obj;
        }
      });
      state.groupMembersList.accept = result;

      let get = false;
      let i = 0;

      while (!get && state.groupListDatas.list.length > i) {
        if (state.groupListDatas.list[i].groupId === action.payload.groupId) {
          const result = state.groupListDatas.list[i].requested.filter(
            (data) => {
              if (data !== action.payload.userId) {
                return data;
              }
            }
          );
          state.groupListDatas.list[i].requested = result;
          get = true;
        } else {
          i++;
        }
      }

      const result2 = state.chatFriend.data.requested.filter((id) => {
        if (id !== action.payload.userId) {
          return id;
        }
      });
      state.chatFriend.data.requested = result2;
    },

    removeGroupMemberFromList: (state, action) => {
      const result = state.groupMembersList.members.filter((obj) => {
        if (obj.userId !== action.payload.userId) {
          return obj;
        }
      });
      state.groupMembersList.members = result;

      let get = false;
      let i = 0;

      while (!get && state.groupListDatas.list.length > i) {
        if (state.groupListDatas.list[i].groupId === action.payload.groupId) {
          const result = state.groupListDatas.list[i].members.memberList.filter(
            (data) => {
              if (data !== action.payload.userId) {
                return data;
              }
            }
          );
          state.groupListDatas.list[i].members.memberList = result;
          get = true;
        } else {
          i++;
        }
      }

      const result2 = state.chatFriend.data.members.memberList.filter((id) => {
        if (id !== action.payload.userId) {
          return id;
        }
      });
      state.chatFriend.data.members.memberList = result2;

      state.chatFriend.data.members.totalMember =
        parseInt(state.chatFriend.data.members.totalMember, 10) - 1;
    },

    addAddMemberList: (state, action) => {
      let isHas = false;
      state.groupMembersList.add.map((data) => {
        if (data.userId === action.payload.userId) {
          isHas = true;
        }
      });

      if (!isHas) {
        state.groupMembersList.add.push(action.payload);
      }
    },

    addGroupMemberByAdminR: (state, action) => {
      state.groupMembersList.members.push(action.payload.data);

      const result = state.groupMembersList.add.filter((data) => {
        if (data.userId !== action.payload.data.userId) {
          return data;
        }
      });

      state.groupMembersList.add = result;

      let i = 0;
      let get = false;

      while (!get && state.groupListDatas.list.length > i) {
        if (state.groupListDatas.list[i].groupId === action.payload.groupId) {
          state.groupListDatas.list[i].members.memberList.push(
            action.payload.data.userId
          );
          state.groupListDatas.list[i].members.totalMember =
            state.groupListDatas.list[i].members.totalMember + 1;
          get = true;
        } else {
          i++;
        }
      }

      state.chatFriend.data.members.memberList.push(action.payload.data.userId);
      state.chatFriend.data.members.totalMember =
        state.chatFriend.data.members.totalMember + 1;
    },

    //remove from groupslist leave form a group
    leaveFromaGroupR: (state, action) => {
      const result = state.profileDatas.groups.filter((obj) => {
        if (obj.id !== action.payload) {
          return obj;
        }
      });

      state.profileDatas.groups = result;

      const result2 = state.groupListDatas.list.filter((obj) => {
        if (obj.groupId !== action.payload) {
          return obj;
        }
      });
      state.groupListDatas.list = result2;
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
  addMessagedFriendList,
  setSelectedUser,
  addAddedGroup,
  addAddedGroupList,
  cancelAddedGroup,
  setGroupListDatas,
  addGroupListAsOwner,
  deleteGroupR,
  removeMessagedFriend,
  addGroupMemberList,
  addGroupAcceptList,
  addGroupMember,
  removeGroupAcceptList,
  removeGroupMemberFromList,
  decreaseTotalGroupMemberFromGroup,
  addAddMemberList,
  addGroupMemberByAdminR,
  leaveFromaGroupR,
} = userDatasReducer.actions;
export default userDatasReducer.reducer;
