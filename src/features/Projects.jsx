import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { database } from "../firebase";

export const fetchProjectsData = createAsyncThunk(
  "fetchProjectsData",
  async (userId) => {
    const dataQuery = query(
      collection(database, "projects"),
      where("members", "array-contains", userId)
    );
    try {
      const response = await getDocs(dataQuery);
      return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      return error;
    }
  }
);

export const addNewProject = async (project) => {
  await addDoc(collection(database, "projects"), project);
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: { status: "idle", value: [], error: null },
  reducers: {
    addNewProjectLocally: (state, action) => {
      state.value.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProjectsData.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchProjectsData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.value = action.payload;
    });
    builder.addCase(fetchProjectsData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});
export const { addNewProjectLocally } = projectsSlice.actions;
export default projectsSlice.reducer;
