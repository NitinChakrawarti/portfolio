import React, { useState } from "react";
import "./hero_btn.css";

const Hero_button = () => {
  const [moseOver, setMouseOver] = useState(false);
  function herobtn_over() {
    setMouseOver(true);
  }
  function heobtn_leave() {
    setMouseOver(false);
  }
  const style = {
    backgroundColor: moseOver ? "crimson" : "black",
    color: moseOver ? "black" : "crimson",
    border: moseOver ? "black" : "white",
  };
 
  return (
    <div className="hero-buttons">
     
      <a href="https://drive.google.com/file/d/1YM-ye3bVBZ_zda8hTcgLtKm1zjDNPx-I/view?usp=drive_link" target="_blank"> <button
        style={style}
        className="hero_btn"
        onMouseOver={herobtn_over}
        onMouseLeave={heobtn_leave}
        // onClick={downloadFile}
      > Download CV </button></a> 
     
      
      <a href="https://www.linkedin.com/in/nitinchakrawarti" className="socialIcon" target="_blank"><i class="fa-brands fa-linkedin-in"  ></i></a>
      <a href="https://github.com/NitinChakrawarti" className="socialIcon" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://x.com/nitinchakarawar?t=ZIOZ_BNaKUPkN4bVzj9bHw&s=09" className="socialIcon" target="_blank"><i class="fa-solid fa-x"></i></a>
    </div>
  );
};

export default Hero_button;
