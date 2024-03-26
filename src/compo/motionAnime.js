import React from "react";
import Csskill from "./csskills";
import AnimatedProgressBar from "./animatedprogressbar";
// export fuction
const MotionAnime = () => {
  return (
    <div>
      <div className="skills_cs">
        {Csskill.map((cueskill, index) => (
          <AnimatedProgressBar
          key={index}
            progress={cueskill.perce}
            skillname={cueskill.name}
            colo={cueskill.colo}
          />
        ))}
      </div>
    </div>
  );
};

export default MotionAnime;
