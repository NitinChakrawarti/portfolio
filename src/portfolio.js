import React from "react";
import Navbar from "./compo/navbar";
import Herosection from "./compo/herosection";
import Aboutsection from "./compo/aboutsection";
import Hire_me from "./compo/hire_me";
import Skills from "./compo/skills";
import Projects from "./compo/projects";

const Portfolio = () => {
  return (
    <div className="PortBody">
      <Navbar />
      <Herosection />

      <div className="projectbody">
        <Aboutsection />

        <Skills />

        <Projects />

        <Hire_me />
      </div>
    </div>
  );
};

export default Portfolio;
