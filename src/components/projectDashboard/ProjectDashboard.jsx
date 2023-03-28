import React from "react";
import ListCard from "./ListCard";
import TaskCard from "./TaskCard";
import useDropRef from "./useDropRef";
import "./style.css";
import { useSelector } from "react-redux";

const ProjectDashboard = () => {
  const { dropOnTodoCard, dropOnInProgressCard, dropOnCompleteCard } =
    useDropRef();

  const tasks = useSelector((state) => state.tasks.value);

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

export default ProjectDashboard;
