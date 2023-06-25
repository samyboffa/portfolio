import React from "react";

const ColorCircle = ({
  color = "#381848",
  top = 50,
  left = 70,
  height = "500",
  width = "500",
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `radial-gradient(${color} 10% , rgba(34, 31, 34,0.1) 50%)`,
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        borderRadius: "50%",
        // zIndex: 2,
      }}
    ></div>
  );
};

export default ColorCircle;
