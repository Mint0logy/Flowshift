import React from "react";
import { useDrag } from "react-dnd";
import "./style.css";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { task: task },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));
  return (
    <div
      className="task-card"
      style={{ display: isDragging ? "none" : "flex" }}
      ref={drag}
    >
      {task.title}
    </div>
  );
};

export default TaskCard;
