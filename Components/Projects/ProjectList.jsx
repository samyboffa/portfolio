import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../helpers/skills";

const ProjectList = () => {
  return (
    <div className="text-white mt-5 projectList overXHidden py-5">
      <h4 className="aboutTitle wm100 text-center">My Projects</h4>
      <div className="d-flex flex-column">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
