import { createSlice } from "@reduxjs/toolkit";

export const inProgressItemsSlice = createSlice({
  name: "inProgressItems",
  initialState: { value: [] },
  reducers: {
    addTaskToInProgressList: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeTaskFromInProgressList: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTaskToInProgressList } = inProgressItemsSlice.actions;
export default inProgressItemsSlice.reducer;
