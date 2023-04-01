import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: { currentUserId: "" },
  reducers: {
    setUserState: (state, action) => {
      return { currentUserId: action.payload };
    },
  },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
