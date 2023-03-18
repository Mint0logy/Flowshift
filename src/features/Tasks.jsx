import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  documentId,
  query,
  where,
} from "firebase/firestore";
import { database } from "../firebase";

export const fetchTasksData = createAsyncThunk(
  "fetchTasksData",
  async (tasksToFetech) => {
    const dataQuery = query(
      collection(database, "tasks"),
      where(documentId(), "in", tasksToFetech)
    );

    try {
      const response = await getDocs(dataQuery);
      return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      return error;
    }
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { status: "idle", value: [], error: null },
  reducers: {
    changeTaskStatus: (state, action) => {
      const { item, newStatus } = action.payload;
      let stateToModify = { ...current(state) };
      let taskToModify = stateToModify.value.indexOf(
        ...stateToModify.value.filter((element) => element.id === item.task.id)
      );
      stateToModify.value = [
        ...stateToModify.value.slice(0, taskToModify),
        { ...stateToModify.value[taskToModify], status: newStatus },
        ...stateToModify.value.slice(taskToModify + 1),
      ];
      return stateToModify;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTasksData.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasksData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.value = action.payload;
    });
    builder.addCase(fetchTasksData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { changeTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
