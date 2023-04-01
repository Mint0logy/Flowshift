import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "Projects",
  initialState: { value: [], selectedProject: "" },
  reducers: {
    addNewProject: (state, action) => {
      return {
        value: [...state.value, action.payload],
        selectedProject: state.selectedProject,
      };
    },
    changeSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    setProjectsState: (state, action) => {
      return {
        value: action.payload,
        selectedProject: state.selectedProject,
      };
    },
  },
});

export const { addNewProject, changeSelectedProject, setProjectsState } =
  projectsSlice.actions;
export default projectsSlice.reducer;
