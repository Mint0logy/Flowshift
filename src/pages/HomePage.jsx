import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjectsData } from "../features/Projects";
import { fetchTasksData } from "../features/Tasks";
import { auth } from "../firebase";
import ProjectDashboard from "../components/projectDashboard/ProjectDashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ProjectMenu from "../components/projectMenu/ProjectMenu";

const HomePage = () => {
  const isAuth = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    projects.status === "idle" &&
      dispatch(fetchProjectsData(auth.currentUser.uid));
    projects.status === "succeeded" &&
      dispatch(fetchTasksData(projects.value[1].tasks));
  }, [dispatch, projects]);

  if (!isAuth) {
    return <div>Nie ma takiego bicia</div>;
  }
  if (projects.status !== "succeeded" || tasks.status !== "succeeded") {
    <h1>LOADING</h1>;
  }
  return (
    <div>
      <ProjectMenu />
      <DndProvider backend={HTML5Backend}>
        <ProjectDashboard />
      </DndProvider>
    </div>
  );
};

export default HomePage;
