import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewProject,
  addNewProjectLocally,
  setSelectedProject,
} from "../../features/Projects";
import { auth } from "../../firebase";

const CreateProjectPopup = ({ isTriggered, handlePopupClose }) => {
  const [newProjectName, setNewProjectName] = useState("");

  const dispatch = useDispatch();
  const onCreate = () => {
    const createdProject = {
      name: newProjectName,
      members: [auth.currentUser.uid],
      tasks: [],
    };
    addNewProject(createdProject).then((id) => {
      dispatch(addNewProjectLocally({ ...createdProject, id }));
      dispatch(setSelectedProject(id));
    });

    handlePopupClose();
  };

  return isTriggered ? (
    <div className="extended-taks-card-popup">
      <div className="extended-taks-card-popup-inner">
        <label>Project Name: </label>
        <input
          value={newProjectName}
          onChange={(event) => setNewProjectName(event.target.value)}
          placeholder="Type project name here..."
        ></input>
        <button onClick={() => onCreate()}>Create</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CreateProjectPopup;
