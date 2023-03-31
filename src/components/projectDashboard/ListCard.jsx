import React from "react";
import { useState } from "react";
import "./style.css";
import TaskCardPopup from "./taskCardPopup/TaskCardPopup";

const ListCard = ({ title, children, dropRef }) => {
  const [isPopupTriggered, setIsPopupTriggered] = useState(false);

  const triggerPopupStateChange = () => {
    setIsPopupTriggered(!isPopupTriggered);
  };

  return (
    <div ref={dropRef} className="wrapping-card">
      <div className="list-card-header">
        <h1>{title}</h1>
        <button onClick={() => triggerPopupStateChange()}>+</button>
      </div>
      {children}
      <TaskCardPopup
        isTriggered={isPopupTriggered}
        task={null}
        handlePopupClose={triggerPopupStateChange}
      />
    </div>
  );
};

export default ListCard;
