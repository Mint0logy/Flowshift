import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/User";
import todoItemsReducer from "./features/TodoItems";
import InProgressItemsReducer from "./features/InProgressItems";
import completeItemsReducer from "./features/CompleteItems";

const store = configureStore({
  reducer: {
    user: userReducer,
    todoList: todoItemsReducer,
    inProgressList: InProgressItemsReducer,
    completeList: completeItemsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
