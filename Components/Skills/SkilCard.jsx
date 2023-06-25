import React from "react";

const SkilCard = ({ skill }) => {
  return (
    <div className="skillCardContainer w20 gap-3 pointer alignC flex-column">
      <img
        src={`/skills/${skill.image}`}
        alt={skill.name}
        className="skillLogo"
      />
      <div className="f20 bold mt-3">{skill.name}</div>
      <div
        className="skillLevelContainer"
        style={{ height: `calc(${skill.level}%)` }}
      ></div>
    </div>
  );
};

export default SkilCard;
