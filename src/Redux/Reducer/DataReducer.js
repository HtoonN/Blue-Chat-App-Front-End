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
  },
});

export const { setFindFriendsData } = dataReducer.actions;
export default dataReducer.reducer;
