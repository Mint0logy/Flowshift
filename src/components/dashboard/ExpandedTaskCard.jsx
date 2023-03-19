import React, { useState } from "react";
import "./style.css";

const ExpandedTaskCard = ({ isTriggered, task, handlePopupClose }) => {
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [assignedUser, setAssignedUser] = useState(task.assigned_user);
  const [storyPoints, setStoryPoints] = useState(task.story_points);
  const [newComment, setNewComment] = useState("");

  const onSaveButton = () => {
    let temporaryTask = { ...task };
    temporaryTask.description = description;
    temporaryTask.status = status;
    temporaryTask.assigned_user = assignedUser;
    temporaryTask.story_points = storyPoints;
    temporaryTask.comments.push({ author: "bulshit", content: newComment });
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
            <textarea
              defaultValue={task.description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            <div>
              <textarea
                onChange={(event) => setNewComment(event.target.value)}
              ></textarea>
              {task.comments.map((comment, i) => (
                <div key={i}>
                  <h4>{comment.author}</h4>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <select
              defaultValue={task.status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="todo">To do</option>
              <option value="inprogress">In Progress</option>
              <option value="complete">Completed</option>
            </select>
            <select
              defaultValue={task.story_points}
              onChange={(event) => setStoryPoints(event.target.value)}
            >
              {[...Array(9)].map((x, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <h2>{task.assigned_user}</h2>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ExpandedTaskCard;
