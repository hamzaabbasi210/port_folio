import React from "react";
import Navbar from "../navbar/Navbar";
import "./Skills.css";
import Skills__Card from "./Skills__Card";

function Skills() {
  return (
    <>
      <div className="skills-container w-full max-w-[80vw]  m-auto ">
        <Skills__Card />
      </div>
    </>
  );
}

export default Skills;
