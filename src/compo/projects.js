import React, { useState } from "react";
import "./hire-me.css";
import "./contactrespon.css";
import { ProjectApi } from "./projectsApi";
const delay = 2500;
const Projects = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === ProjectApi.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      <div className="projects hire-me ">
        <h1 className="skills_h1 hire-me_h1 about_des_h1">Projects</h1>
        <h2>My projects </h2>
        <div className="project_entity">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
  
              {ProjectApi.map((curEle, index) => 
                    (
                    <div className="projectsDetails slide" key={index} >
                      <h1>{curEle.name}</h1>
                      <p>{curEle.des}</p>

                      <div className="projects_links">
                    
                      <a href={curEle.repolink} className="fa-regular fa-file-code projectIconLink"></a>
                      <a href={curEle.livelink} target="_blank" className="fa-solid fa-link projectIconLink"></a>
                      </div>
                    </div>
                    )
                  )}
            </div>

            <div className="slideshowDots">
              {ProjectApi.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                >
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
