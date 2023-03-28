import React, { useState } from "react";
import { useDrag } from "react-dnd";
import TaskCardPopup from "./taskCardPopup/TaskCardPopup";
import "./style.css";

const TaskCard = ({ task }) => {
  const [isPopupTriggered, setIsPopupTriggered] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { task: task },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  const triggerPopupStateChange = () => {
    setIsPopupTriggered(!isPopupTriggered);
  };
  return (
    <div
      onClick={(event) =>
        event.currentTarget === event.target && triggerPopupStateChange()
      }
      className="task-card"
      style={{ display: isDragging ? "none" : "flex" }}
      ref={drag}
    >
      {task.title}
      <TaskCardPopup
        task={task}
        isTriggered={isPopupTriggered}
        handlePopupClose={triggerPopupStateChange}
      />
    </div>
  );
};

export default TaskCard;
