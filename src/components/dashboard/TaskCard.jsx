import React from "react";
import { useDrag } from "react-dnd";
import "./style.css";

const TaskCard = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));
  return (
    <div
      className="task-card"
      style={{ display: isDragging ? "none" : "flex" }}
      ref={drag}
    >
      {name}
    </div>
  );
};

export default TaskCard;
