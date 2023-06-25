import React, { useEffect, useRef } from "react";
import { useState } from "react";

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef();
  // const [screenHeight, setScreenHeight] = useState(window?.innerHeight);
  const [isVisible, setisVisible] = useState(false);
  const [selected, setselected] = useState(false);
  const [buttonHovered, setbuttonHovered] = useState(false);
  const [odd] = useState(index % 2 === 0);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isVisible]);

  const scrollHandler = () => {
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const keyframeStyles = `
    @keyframes trans {
      0% {
        background-position-y: center;
        border-radius: 80px;
      }
      50% {
        background-position-y: top;
        border-radius: 20px;
      }
      100% {
        background-position-y: center;
        border-radius: 80px;
      }
    }
    @keyframes transrev {
      0% {
        background-position-y: center;
        border-radius: 20px;
      }
      50% {
        background-position-y: bottom;
        border-radius: 80px;
      }
      100% {
        background-position-y: center;
        border-radius: 20px;
      }
    }
  `;
  //
  return (
    <div
      ref={containerRef}
      className={`projectContainer flex-lg-nowrap flex-wrap wm100 alignC gap-4 my-5 py-5
      ${odd ? "" : "reversed"}
      ${isVisible ? "" : "notVisibleProject"}
      `}
      style={{ height: `${project.height}px` }}
    >
      <style>{keyframeStyles}</style>
      <div
        className={`projectMain wm100 flex-wrap alignC ${
          odd ? "" : "reversed"
        }`}
      >
        <div
          id={`project-${index}`}
          className={`wm100  projectImage gap-3 alignC  ${
            odd ? "" : "reversed"
          }`}
          style={{
            backgroundImage: `url(/projects/bg/${project.bg})`,
            height: `${project.height}px`,
            width: `${project.width}px`,
            animation: `${odd ? "trans" : "transrev"} 20s ease-in-out infinite`,
          }}
        >
          <a href={project.link} target="_blank">
            {" "}
            <button id={``} className="projectButton w200">
              Visit Site
            </button>
          </a>
          <button
            id={``}
            className="projectButton w50px"
            onClick={() => {
              setselected(!selected);
            }}
          >
            {odd ? ">" : "<"}
          </button>
        </div>
        <div
          className={`projectInfo w40 wm100 ${
            odd ? "margEven" : "text-lg-end margOdd"
          }`}
        >
          <div className="projectTitle w100">{project.name}</div>
          <div className="projectdate">{project.date}</div>
          {project.societyLink && (
            <div className="projectCredit">
              During employment at : <span> </span>
              <a href={project.societyLink} target="_blank">
                {project.society}{" "}
              </a>{" "}
            </div>
          )}
        </div>
      </div>
      <div
        className={`screenshotsSection h100 ${
          isVisible ? "" : "notVisibleProject"
        }`}
        style={{
          width: selected ? "80vw" : "0vw",
          overflowY: selected ? "scroll" : "hidden",
        }}
      >
        <img src="/projects/screenshots/agilix1.png" alt="" />
        <img src="/projects/screenshots/agilix1.png" alt="" />
        <img src="/projects/screenshots/agilix1.png" alt="" />
        <img src="/projects/screenshots/agilix1.png" alt="" />
        <img src="/projects/screenshots/agilix1.png" alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
