import React, { useContext, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../helpers/skills";
import styleContext from "../../Context/MyContext";

const ProjectList = () => {
  const [visibleItem, setvisibleItem] = useState(0);
  const { bgColor } = useContext(styleContext);
  return (
    <div
      className="text-white mt-5 projectList overXHidden py-5"
      style={{ backgroundColor: bgColor }}
    >
      <h4 className="aboutTitle wm100 text-center">My Projects</h4>
      <div className="d-flex flex-column">
        {projects.map((project, index) => (
          <ProjectCard
            projects={projects}
            project={project}
            key={index}
            index={index}
            setvisibleItem={setvisibleItem}
            visibleItem={visibleItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
