import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../components/dashboard/Dashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const HomePage = () => {
  const isAuth = useSelector((state) => state.user.value);

  return isAuth ? (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Dashboard />
      </DndProvider>
    </div>
  ) : (
    <div>Nie ma takiego bicia</div>
  );
};

export default HomePage;
