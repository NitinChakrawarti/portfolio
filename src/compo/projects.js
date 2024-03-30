import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./projects.css";
import { ProjectApi } from "./projectsApi";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Projects = () => {
  function projectListToshow(curEle, index) {
    return (
      <>
        <div className="projectsDetails slide" key={index}>
          <h1>{curEle.name}</h1>
          <p>{curEle.des}</p>

          <div className="projects_links">
            <a
              href={curEle.repolink}
              className="fa-regular fa-file-code projectIconLink"
            ></a>
            <a
              href={curEle.livelink}
              target="_blank"
              className="fa-solid fa-link projectIconLink" id="contact"
            ></a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="hire-me project_parent " >
        <h1 className=" project_h1 about_des_h1" >Projects</h1>

        <AutoplaySlider
        style={{
              height: '100%',
              backgroundColor:'red',
             
            }}
          className={"autoplayproject"}
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={1000}
        >
          {ProjectApi.map(projectListToshow)}
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Projects;
