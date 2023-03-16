import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase";

const fetchData1 = async (userId) => {
  const buildedQuery = query(
    collection(database, "projects"),
    where("members", "array-contains", userId)
  );

  try {
    const data = await getDocs(buildedQuery);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: { value: [] },
  reducers: {
    getProjectsFromDatabase: (state, action) => {
      const buildedQuery = query(
        collection(database, "projects"),
        where("members", "array-contains", action.payload)
      );

      const fetchData = async () => {
        const data = await getDocs(buildedQuery);
        state.value = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      };
      fetchData();
    },
  },
});

export const { getProjectsFromDatabase } = projectsSlice.actions;
export default projectsSlice.reducer;
