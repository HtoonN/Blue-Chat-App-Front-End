import { createSlice } from "@reduxjs/toolkit";

export const dataReducer = createSlice({
  name: "dataReducer",
  initialState: {
    findFriendsData: false,
  },
  reducers: {
    setFindFriendsData: (state, action) => {
      state.findFriendsData = action.payload;
    },

    removeFindFriendsData: (state, action) => {
      if (Array.isArray(state.findFriendsData.friends.friendsList)) {
        const res = state.findFriendsData.friends.friendsList.filter(
          (element) => {
            if (element.userId !== action.payload) {
              return element;
            }
          }
        );
        state.findFriendsData.friends.friendsList = res;
      }
    },
  },
});

export const { setFindFriendsData, removeFindFriendsData } =
  dataReducer.actions;
export default dataReducer.reducer;
