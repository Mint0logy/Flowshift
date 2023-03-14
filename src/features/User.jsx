import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: false },
  reducers: {
    changeAuth: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { changeAuth } = userSlice.actions;
export default userSlice.reducer;
