import { createSlice } from "@reduxjs/toolkit";

const tmpTasks = [
  { id: 1, name: "Zabić smoka i gołą babę" },
  { id: 2, name: "Zbrać ryż dla ryżowego księcia" },
  { id: 3, name: "Pocałować Gomeza w dupę" },
];

export const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: { value: tmpTasks },
  reducers: {
    addTaskToTodoList: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addTaskToTodoList } = todoItemsSlice.actions;
export default todoItemsSlice.reducer;
