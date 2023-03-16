import React, { useEffect } from "react";
import ListCard from "./ListCard";
import TaskCard from "./TaskCard";
import useDropRef from "./useDropRef";
import "./style.css";
import { auth } from "../../firebase";
import { getProjectsFromDatabase } from "../../features/Projects";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const { dropOnTodoCard, dropOnInProgressCard, dropOnCompleteCard } =
    useDropRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectsFromDatabase(auth.currentUser.uid));
  }, []);

  return (
    <div className="dashboard-wrapper">
      <ListCard dropRef={dropOnTodoCard} title="To do!"></ListCard>
      <ListCard dropRef={dropOnInProgressCard} title="In Progress!"></ListCard>
      <ListCard dropRef={dropOnCompleteCard} title="Complete"></ListCard>
    </div>
  );
};

export default Dashboard;
