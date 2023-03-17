import React, { useEffect } from "react";
import ListCard from "./ListCard";
import TaskCard from "./TaskCard";
import useDropRef from "./useDropRef";
import "./style.css";
import { auth } from "../../firebase";
import { fetchProjectsData } from "../../features/Projects";
import { fetchTasksData } from "../../features/Tasks";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const { dropOnTodoCard, dropOnInProgressCard, dropOnCompleteCard } =
    useDropRef();

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const tasks = useSelector((state) => state.tasks.value);

  useEffect(() => {
    projects.status === "idle" &&
      dispatch(fetchProjectsData(auth.currentUser.uid));
    projects.status === "succeeded" &&
      dispatch(fetchTasksData(projects.value[1].tasks));
  }, [dispatch, projects]);

  return (
    <div className="dashboard-wrapper">
      <ListCard dropRef={dropOnTodoCard} title="To do!">
        {tasks.map(
          (task) =>
            task.status === "todo" && <TaskCard key={task.id} task={task} />
        )}
      </ListCard>
      <ListCard dropRef={dropOnInProgressCard} title="In Progress!">
        {tasks.map(
          (task) =>
            task.status === "inprogress" && (
              <TaskCard key={task.id} task={task} />
            )
        )}
      </ListCard>
      <ListCard dropRef={dropOnCompleteCard} title="Complete">
        {tasks.map(
          (task) =>
            task.status === "complete" && <TaskCard key={task.id} task={task} />
        )}
      </ListCard>
    </div>
  );
};

export default Dashboard;
