import React, { useState } from "react";
import styles from "./CreateProjectPopup.module.css";
import {
  addNewProject,
  changeSelectedProject,
} from "../../../features/Projects";
import { useDispatch, useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../../firebase";

const CreateProjectPopup = ({ toggleCreateProjectPopup }) => {
  const [newProjectName, setNewProjectName] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sendNewProjectDataToFirebase = async (project) => {
    const addedProject = await addDoc(
      collection(database, "projects"),
      project
    );
    return addedProject.id;
  };

  const createNewProject = async () => {
    const project = {
      name: newProjectName,
      members: [user.currentUserId],
      tasks: [],
    };
    const projectId = await sendNewProjectDataToFirebase(project);
    console.log(projectId);
    project.id = projectId;
    dispatch(addNewProject(project));
    dispatch(changeSelectedProject(projectId));
  };
  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>
        <div className={styles.top}>
          <button onClick={toggleCreateProjectPopup}>X</button>
        </div>

        <div className={styles.bottom}>
          <input
            value={newProjectName}
            onChange={(event) => setNewProjectName(event.target.value)}
            placeholder="Type new project name here"
          />
          <button onClick={() => createNewProject()}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPopup;
