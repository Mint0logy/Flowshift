import React, { useEffect } from "react";
import "../style.css";
import Comments from "./Comments";
import Description from "./Description";
import Status from "./Status";
import StoryPoints from "./StoryPoints";
import Title from "./Title";
import useLocalTask from "./useLocalTask";

const TaskCardPopup = ({ isTriggered, task, handlePopupClose }) => {
  const {
    setLocalTitle,
    setLocalDescription,
    setLocalStatus,
    setLocalAssignedUser,
    setLocalStoryPoints,
    setLocalComments,
    addNewComment,
    localTask,
  } = useLocalTask();

  useEffect(() => {
    if (task !== null) {
      setLocalTitle(task.title);
      setLocalDescription(task.description);
      setLocalStatus(task.status);
      setLocalAssignedUser(task.assigneduser);
      setLocalStoryPoints(task.storypoints);
      setLocalComments(task.comments);
    }
  });

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
        <button>Save</button>
        <div className="extended-tasks-card-content-wrapper">
          <Title title={localTask.title} setTitle={setLocalTitle} />
          <div>
            <Description
              setDescription={setLocalDescription}
              description={localTask.description}
            />
            <Comments
              setNewComment={addNewComment}
              comments={localTask.comments}
            />
          </div>
          <div>
            <Status status={localTask.status} setStatus={setLocalStatus} />
            <StoryPoints
              storyPoints={localTask.storypoints}
              setStoryPoints={setLocalStoryPoints}
            />
            <h2>{localTask.assigneduser}</h2>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default TaskCardPopup;
