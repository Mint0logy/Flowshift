import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import projectsReducer from "./Projects";

const USER_KEY = "userState";
const getUserSavedState = () => {
  const storedUserData = localStorage.getItem(USER_KEY);
  return storedUserData
    ? JSON.parse(storedUserData).currentUserId
    : { currentUserId: "" };
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
  },
  preloadedState: {
    user: getUserSavedState(),
  },
});

store.subscribe(() => {
  const currentUserId = store.getState().user.currentUserId;
  localStorage.setItem(USER_KEY, JSON.stringify({ currentUserId }));
});
