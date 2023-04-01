import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
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
  const addedProject = await addDoc(collection(database, "projects"), project);
  return addedProject.id;
};

export const updateTasksInProject = async (id, newTasksList) => {
  await updateDoc(doc(database, "projects", id), { tasks: newTasksList });
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    status: "idle",
    value: [],
    error: null,
    selectedProject: "oXC7Fe4PIP1tk42Kld0f",
  },
  reducers: {
    addNewProjectLocally: (state, action) => {
      state.value.push(action.payload);
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
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
export const { addNewProjectLocally, setSelectedProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
