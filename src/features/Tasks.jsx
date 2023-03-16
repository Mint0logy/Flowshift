import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: [] },
  reducers: {
    getTasks: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
