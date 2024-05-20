import React, { useState } from "react";
import "./hero_btn.css";
import './herobtnrespo.css';


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
     
      <a href="https://www.canva.com/design/DAF_fOURT2g/R_HOXmnoNB8k8X8NF1UEQQ/view?utm_content=DAF_fOURT2g&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"> <button
        style={style}
        className="hero_btn"
        onMouseOver={herobtn_over}
        onMouseLeave={heobtn_leave}
      
      > Download CV </button></a> 
     
      
      <a href="https://www.linkedin.com/in/nitinchakrawarti" className="socialIcon" target="_blank"><i className="fa-brands fa-linkedin-in"  ></i></a>
      <a href="https://github.com/NitinChakrawarti" className="socialIcon" target="_blank"><i className="fa-brands fa-github"></i></a>
      <a href="https://x.com/nitinchakarawar?t=ZIOZ_BNaKUPkN4bVzj9bHw&s=09" className="socialIcon" target="_blank"><i className="fa-solid fa-x"></i></a>
    </div>
  );
};

export default Hero_button;
