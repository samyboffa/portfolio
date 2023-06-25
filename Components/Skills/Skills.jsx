import React from "react";
import { skills } from "../../helpers/skills";
import SkilCard from "./SkilCard";

const Skills = () => {
  return (
    <div className="bg-dark text-white mt-5">
      <h4 className="decorated text-center">My Skills</h4>
      <div className="d-flex flex-wrap alignC gap-4 pt-5 flex-wrap">
        {skills.map((skill, index) => (
          <SkilCard skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
