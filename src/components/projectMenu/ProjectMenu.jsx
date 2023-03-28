import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateProjectPopup from "./CreateProjectPopup";

const ProjectMenu = () => {
  const projects = useSelector((state) => state.projects);
  const [isCreateProjectPopupTriggered, setCreateProjectPopupTriggered] =
    useState(false);

  const triggerPopupStateChange = () => {
    setCreateProjectPopupTriggered(!isCreateProjectPopupTriggered);
  };
  return (
    <div>
      {projects.value.map((project) => (
        <p>{project.name}</p>
      ))}
      <CreateProjectPopup
        isTriggered={isCreateProjectPopupTriggered}
        handlePopupClose={triggerPopupStateChange}
      />
      <button onClick={() => triggerPopupStateChange()}>
        Create New Project
      </button>
    </div>
  );
};

export default ProjectMenu;
