import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import CreateProjectPopup from "./elements/CreateProjectPopup";
import ProjectsDropdown from "./elements/ProjectsDropdown";
import {
  setProjectsState,
  changeSelectedProject,
} from "../../features/Projects";

const Sidebar = () => {
  const [isCreateProjecPopupOpened, setIsCreateProjecPopupOpened] =
    useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    const dataQuery = query(
      collection(database, "projects"),
      where("members", "array-contains", user.currentUserId)
    );
    try {
      const response = await getDocs(dataQuery);
      const extractedData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      extractedData.length > 0 &&
        dispatch(changeSelectedProject(extractedData[0].id));
      dispatch(setProjectsState(extractedData));
    } catch (error) {
      return error;
    }
  };

  const toggleCreateProjectPopup = () => {
    setIsCreateProjecPopupOpened(!isCreateProjecPopupOpened);
  };

  return (
    <div className={styles.container}>
      <h2>Name and Surname</h2>
      <ProjectsDropdown />
      <button onClick={toggleCreateProjectPopup}>Create Project</button>
      {isCreateProjecPopupOpened && (
        <CreateProjectPopup
          toggleCreateProjectPopup={toggleCreateProjectPopup}
        />
      )}
    </div>
  );
};

export default Sidebar;
