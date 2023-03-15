import React from "react";
import "./TaskStyle.css";
import { useDrag } from "react-dnd";

const Task = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id, name: name },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <div
      className="task-name"
      style={{ display: isDragging ? "none" : "flex" }}
      ref={drag}
    >
      {name}
    </div>
  );
};

export default Task;
