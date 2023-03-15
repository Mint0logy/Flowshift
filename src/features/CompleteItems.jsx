import { createSlice } from "@reduxjs/toolkit";

export const completeItemsSlice = createSlice({
  name: "completeItems",
  initialState: { value: [] },
  reducers: {
    addTaskToCompleteList: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addTaskToCompleteList } = completeItemsSlice.actions;
export default completeItemsSlice.reducer;
