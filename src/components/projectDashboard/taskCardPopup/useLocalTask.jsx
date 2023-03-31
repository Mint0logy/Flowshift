import { useState } from "react";
import { addNewTaskLocally } from "../../../features/Tasks";

const useLocalTask = () => {
  const defaultTaskStructure = {
    id: "",
    title: "",
    description: "",
    status: "todo",
    assignedUser: "user",
    storyPoints: 1,
    comments: [],
  };

  const [localTask, setLocalTask] = useState(defaultTaskStructure);

  const setLocalId = (id) => {
    setLocalTask({ ...localTask, id });
  };
  const setLocalTitle = (title) => {
    setLocalTask({ ...localTask, title });
  };
  const setLocalDescription = (description) => {
    setLocalTask({ ...localTask, description });
  };
  const setLocalStatus = (status) => {
    setLocalTask({ ...localTask, status });
  };
  const setLocalAssignedUser = (assignedUser) => {
    setLocalTask({ ...localTask, assignedUser });
  };
  const setLocalStoryPoints = (storyPoints) => {
    setLocalTask({ ...localTask, storyPoints });
  };
  const setLocalComments = (comments) => {
    setLocalTask({ ...localTask, comments });
  };
  const addNewComment = (newComment) => {
    setLocalTask({
      ...localTask,
      comments: localTask.comments.push(newComment),
    });
  };

  const addNewTaskToDatabase = () => {
    addNewTaskLocally(localTask);
  };

  const modifyExistingTask = () => {};

  const onSave = (isNew) => {
    return isNew ? addNewTaskToDatabase : modifyExistingTask;
  };

  return {
    setLocalId,
    setLocalTitle,
    setLocalDescription,
    setLocalStatus,
    setLocalAssignedUser,
    setLocalStoryPoints,
    setLocalComments,
    addNewComment,
    onSave,
    localTask,
  };
};

export default useLocalTask;
