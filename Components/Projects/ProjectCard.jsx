import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import styleContext from "../../Context/MyContext";

const ProjectCard = ({ project, index, visibleItem, setvisibleItem }) => {
  const containerRef = useRef();

  const [selected, setselected] = useState(false);
  const [odd] = useState(index % 2 === 0);

  const scrollHandler = () => {
    const rect = containerRef.current.getBoundingClientRect();

    if (rect.top < window.innerHeight / 1.6 && rect.bottom >= 0) {
      setvisibleItem(index);
    }
  };
  const { isMobile } = useContext(styleContext);

  useEffect(() => {
    setselected(false);
  }, [visibleItem]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [visibleItem]);

  const keyframeStyles = `
    @keyframes trans {
      0% {
        background-position-y: center;
        border-radius: ${isMobile ? "0" : "80"}px;
      }
      50% {
        background-position-y: top;
        border-radius: ${isMobile ? "0" : "20"}px;
      }
      100% {
        background-position-y: center;
        border-radius: ${isMobile ? "0" : "80"}px;
      }
    }
    @keyframes transrev {
      0% {
        background-position-y: center;
        border-radius: ${isMobile ? "0" : "20"}px;
      }
      50% {
        background-position-y: bottom;
        border-radius: ${isMobile ? "0" : "80"}px;
      }
      100% {
        background-position-y: center;
        border-radius: ${isMobile ? "0" : "20"}px;
      }
    }
  `;
  //
  return (
    <div
      id={`project${index}`}
      key={index}
      ref={containerRef}
      className={`projectContainer flex-lg-nowrap w100 flex-wrap wm100 alignC py-5
      ${selected ? "overflow-hidden" : ""}
      ${odd ? "" : "reversed"}
      ${isMobile ? "" : visibleItem === index ? "" : "notVisibleProject"}
      `}
      style={{ minHeight: `${project.height}px` }}
    >
      <style>{keyframeStyles}</style>
      <div
        style={{
          width: "100%",
          minHeight: `${project.height}px`,
        }}
        className={`projectMain flex-wrap border-blue gap-5 wm100 flex-lg-nowrap alignC ${
          odd ? "" : "reversed"
        }`}
      >
        <div
          className={`wm100 projectImage gap-3 alignC  ${
            odd ? "" : "reversed"
          }`}
          style={{
            backgroundImage: `url(/projects/bg/${project.bg})`,
            height: `${project.height}px`,
            width: `${project.width}px`,
            animation: `${odd ? "trans" : "transrev"} 20s ease-in-out infinite`,
          }}
        >
          {!selected && project.link && (
            <a href={project.link} target="_blank">
              {" "}
              <button id={``} className="projectButton w200">
                Visit Site
              </button>
            </a>
          )}
          {/* {!project.link && (
            <button
              id={``}
              className={`projectButton w200`}
              onClick={() => {
                setselected(!selected);
              }}
            >
              Screenshots
            </button>
          )} */}
        </div>

        <div
          className={`projectInfo d-flex flex-column justify-content-center w40 wm100 ${
            odd ? "margEven" : "text-lg-end margOdd"
          }`}
        >
          <div className="projectTitle w100 wm100">{project.name}</div>
          <div className="projectdate f26">{project.date}</div>
          <div className="projectdate">{project.type}</div>
          <div className=" my-3">
            {project.platform.map((platform, index) => (
              <img
                key={index}
                className="mx-3"
                src={`/icons/${platform}.png`}
                alt=""
                height={50}
              />
            ))}
          </div>
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
      {/* <div
        className={`screenshotsSection px-4 ${
          selected ? "shownScreenShots" : "hiddenScreenShots"
        }
        `}
      >
        <div
          className={`closeScreenShotContainer alignC ${
            selected ? "" : "hiddenScreenShots"
          }`}
        >
          <button
            className="w200 projectButton"
            onClick={() => setselected(false)}
          >
            <ChevronUp />
          </button>
        </div>
        <div className="d-flex gap-3 imageScreenSection">
          {["", "", "", "", ""].map((screen, index) => (
            <img
              key={index}
              src="/projects/screenshots/agilix1.png"
              style={{
                height: `700px`,
                width: `auto`,
              }}
              className="py-1 z-3"
              alt=""
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProjectCard;
