import React from "react";
import SkillsApi from "./skillsapi";
import "./skills.css";
import "./skillsrespon.css";

import MotionAnime from "./motionAnime";
const Skills = () => {
  function softSkills(curlele, index) {
    return (
   
        <div className="softentity" key={index} id="projects">
          <div className="softskills"></div>
          <h3 >{curlele}</h3>
        </div>
 
    );
  }
  return (
    <div>
      <div className="skills hire-me" id="skills" >
        <h1 className="skills_h1 hire-me_h1 about_des_h1" >Skills</h1>

        <h2>Tech Enthusiast & Innovator</h2>
        <div className="skills-body">
          <MotionAnime />
          <div className="skills_soft">{SkillsApi.map(softSkills)}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
