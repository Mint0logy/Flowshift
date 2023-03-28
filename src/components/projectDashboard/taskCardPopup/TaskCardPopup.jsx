import React, { useState } from "react";
import "../style.css";
import Comments from "./Comments";
import Description from "./Description";
import Status from "./Status";
import StoryPoints from "./StoryPoints";

const TaskCardPopup = ({ isTriggered, task, handlePopupClose }) => {
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [assignedUser] = useState(task.assigned_user);
  const [storyPoints, setStoryPoints] = useState(task.story_points);
  const [newComment, setNewComment] = useState("");

  const onSaveButton = () => {
    let temporaryTask = { ...task };
    temporaryTask.description = description;
    temporaryTask.status = status;
    temporaryTask.assigned_user = assignedUser;
    temporaryTask.story_points = storyPoints;
    temporaryTask.comments.push({ author: "username", content: newComment });
  };

  return isTriggered ? (
    <div
      className="extended-taks-card-popup"
      draggable={true}
      onDragStart={(event) => event.preventDefault()}
    >
      <div className="extended-taks-card-popup-inner">
        <button className="close-button" onClick={() => handlePopupClose()}>
          X
        </button>
        <button onClick={onSaveButton}>Save</button>
        <div className="extended-tasks-card-content-wrapper">
          <div>
            <h1>{task.title}</h1>
            <Description
              setDescription={setDescription}
              description={task.description}
            />
            <Comments setNewComment={setNewComment} comments={task.comments} />
          </div>
          <div>
            <Status status={task.status} setStatus={setStatus} />
            <StoryPoints
              storyPoints={task.story_points}
              setStoryPoints={setStoryPoints}
            />
            <h2>{task.assigned_user}</h2>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default TaskCardPopup;
