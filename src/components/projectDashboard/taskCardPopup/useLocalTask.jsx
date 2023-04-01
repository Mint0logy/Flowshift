import { useState } from "react";
import { addNewTaskLocally, addNewTask } from "../../../features/Tasks";
import { useSelector, useDispatch } from "react-redux";
import { updateTasksInProject } from "../../../features/Projects";

const useLocalTask = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const defaultTaskStructure = {
    title: "",
    description: "",
    status: "todo",
    assigneduser: "user",
    storypoints: 1,
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
  const setLocalAssignedUser = (assigneduser) => {
    setLocalTask({ ...localTask, assigneduser });
  };
  const setLocalStoryPoints = (storypoints) => {
    setLocalTask({ ...localTask, storypoints });
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

  const getCurrentLocalTask = () => {
    console.log("robię to: ", localTask);
    return localTask;
  };

  const addNewTaskToDatabase = () => {
    addNewTask(localTask).then((id) => {
      setLocalId(id);
      dispatch(addNewTaskLocally(localTask));
      let projectTasksArray = projects.value.filter(
        (project) => project.id === projects.selectedProject
      )[0].tasks;
      updateTasksInProject(projects.selectedProject, [
        ...projectTasksArray,
        id,
      ]);
      setLocalTask(defaultTaskStructure);
    });
  };

  const modifyExistingTask = () => {};

  const onSave = (isNew) => {
    isNew ? addNewTaskToDatabase() : modifyExistingTask();
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
    getCurrentLocalTask,
    localTask,
  };
};

export default useLocalTask;
