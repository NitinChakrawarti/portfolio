import React from "react";
import SkillsApi from "./skillsapi";
import "./skills.css";
import Csskill from "./csskills";
const Skills = () => {

  
  function csSkills(cueskill) {


    const myStyle ={
      backgroundColor:cueskill.colo, 
      width:cueskill.perce,
    }
    
   
    return (
      <>
        <h2 className="csshillh3">{cueskill.name}</h2>
        <div className="progress-bar">
          <div style={myStyle} className={cueskill.name}><span>{cueskill.perce}</span></div>
        </div>
      </> 
    );
  }

  function softSkills(curlele) {
    return <div className="softskills">{curlele}</div>;
  }
  return (
    <div>
      <div className="skills ">
        <h1 className="skills_h1 hire-me_h1 about_des_h1">Skills</h1>
        <h2>Tech Enthusiast & Innovator</h2>
        <div className="skills-body">




          <div className="skills_cs">{Csskill.map(csSkills)}</div>




          <div className="skills_soft">{SkillsApi.map(softSkills)}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
