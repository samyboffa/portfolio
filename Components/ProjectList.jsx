import React, { useEffect, useRef } from "react";
import Project from "./Project";

const ProjectList = ({ transition }) => {
  const ref = useRef();
  const projects = [
    {
      bg: "cybel-bg.jpg",
      logo: "cybel-logo.png",
    },
    {
      bg: "eduq-bg.png",
      logo: "eduq-logo.png",
    },
    {
      bg: "moneeverse-bg.png",
      logo: "moneeverse-logo.png",
    },
    {
      bg: "POF-bg.png",
      logo: "POF-logo.png",
    },
    {
      bg: "poseidon-bg.jpg",
      logo: "poseidon-logo.png",
    },
  ];
  // useEffect(() => {
  //   ref.current.scrollTor
  //   if (window) {
  //     window.scrollTo();
  //     window.scrollTo(500, 0);
  //   }
  // }, []);

  return (
    <div className="rowProjectsContainer" ref={ref}>
      {projects.map((project, index) => (
        <Project
          bg={project.bg}
          logo={project.logo}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectList;
