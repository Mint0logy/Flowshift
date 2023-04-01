import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedProject } from "../../../features/Projects";

const ProjectsDropdown = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const handleProjectChange = (e) => {
    dispatch(changeSelectedProject(e));
  };
  return (
    <select onChange={(event) => handleProjectChange(event.target.value)}>
      {projects.value.map((project, i) => (
        <option key={i} value={project.id}>
          {project.name}
        </option>
      ))}
    </select>
  );
};

export default ProjectsDropdown;
