import React from "react";
import CompleteList from "./CompleteList";
import InProgressList from "./InProgressList";
import TodoList from "./TodoList";
import "./DashboardStyle.css";
import Task from "./Task";
import useDropRefs from "./useDropRefs";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { dropOnTodoList, dropOnInProgressList, dropOnCompleteList } =
    useDropRefs();

  const todoItemsToDisplay = useSelector((state) => state.todoList.value);
  const inProgressItemsToDisplay = useSelector(
    (state) => state.inProgressList.value
  );
  const completeItemsToDisplay = useSelector(
    (state) => state.completeList.value
  );

  return (
    <div className="dashboard-wrapper">
      <TodoList innerRef={dropOnTodoList}>
        {todoItemsToDisplay.map((task) => {
          return <Task key={task.id} id={task.id} name={task.name} />;
        })}
      </TodoList>
      <InProgressList innerRef={dropOnInProgressList}>
        {inProgressItemsToDisplay.map((task) => {
          return <Task key={task.id * 100} id={task.id} name={task.name} />;
        })}
      </InProgressList>
      <CompleteList innerRef={dropOnCompleteList}>
        {completeItemsToDisplay.map((task) => {
          return <Task key={task.id * 1000} id={task.id} name={task.name} />;
        })}
      </CompleteList>
    </div>
  );
};

export default Dashboard;
