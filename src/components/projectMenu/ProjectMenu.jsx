import React from "react";
import { useSelector } from "react-redux";
const ProjectMenu = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <div>
      {projects.value.map((project) => (
        <p>{project.name}</p>
      ))}
    </div>
  );
};

export default ProjectMenu;
