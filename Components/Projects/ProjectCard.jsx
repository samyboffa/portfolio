import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import styleContext from "../../Context/MyContext";

const ProjectCard = ({
  project,
  index,
  visibleItem,
  setvisibleItem,
  projects,
}) => {
  const containerRef = useRef();
  const { setbgColor } = useContext(styleContext);

  const [selected, setselected] = useState(false);
  const [odd] = useState(index % 2 === 0);

  const scrollHandler = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    // console.log(project.name, rect.top, window.innerHeight, rect.bottom);

    if (rect.top < window.innerHeight / 2 && rect.bottom >= 0) {
      setvisibleItem(index);
      setbgColor(project.color);
    }
  };

  useEffect(() => {
    const hello = () => {
      if (visibleItem === index) {
        console.log(project.name);
        console.log(projects[visibleItem].name);
        // const targetElement = document.getElementById(`project${visibleItem}`);
        // setTimeout(() => {
        //   targetElement.scrollIntoView({
        //     behavior: "smooth",
        //     block: "center",
        //     inline: "center",
        //   });
        // }, 500);
      }
    };
    return hello();
  }, [visibleItem]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [visibleItem]);

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
      id={`project${index}`}
      key={index}
      ref={containerRef}
      className={`projectContainer flex-lg-nowrap w100 flex-wrap wm100 alignC my-5 py-5
      ${odd ? "" : "reversed"}
      ${visibleItem === index ? "" : "notVisibleProject"}
      `}
      style={{ minHeight: `${project.height}px` }}
    >
      <style>{keyframeStyles}</style>
      <div
        style={{
          width: !selected ? "100%" : "40%",
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
          {!project.link && (
            <button
              id={``}
              className={`projectButton w200`}
              onClick={() => {
                setselected(!selected);
              }}
            >
              {odd
                ? selected
                  ? "Screenshots >"
                  : "< Screenshots"
                : selected
                ? "< Screenshots"
                : "Screenshots >"}
            </button>
          )}
        </div>

        <div
          className={`projectInfo d-flex flex-column justify-content-center w40 wm100 ${
            odd ? "margEven" : "text-lg-end margOdd"
          } ${selected ? (odd ? "op0 trans1000" : "op0 trans-1000") : ""}`}
        >
          <div className="projectTitle nobreak w100 wm100">{project.name}</div>
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
        className={`screenshotsSection  ${
          visibleItem ? (odd ? "pl100" : "pr100") : "notVisibleProject "
        }`}
        style={{
          width: selected ? "60%" : "0%",
          height: `${project.height}px`,
          overflowY: selected ? "scroll" : "hidden",
        }}
      >
        {["", "", "", "", ""].map((screen, index) => (
          <img
            key={index}
            src="/projects/screenshots/agilix1.png"
            style={{
              height: `${project.height}px`,
              width: `auto`,
            }}
            className="py-1"
            alt=""
          />
        ))}
      </div> */}
    </div>
  );
};

export default ProjectCard;
