import React, {useState} from "react";
import "./about.css";
import "./hero_btn.css";
import './aboutrespon.css';
import About_btn from "./about_btn";
const Aboutsection = () => {
   

  return (
    <div className="about_sec">
      <div className="about_des_im">
        <img
          src="https://vrajinfosolution.com/wp-content/uploads/2023/04/development.png"
          alt="about image"
          className="about_img"
        />
      </div>
      <div className="about_des">
        <h1 className="about_des_h1">About Me</h1>
        <h2>Let me Introduce Myself</h2>
        <About_btn />
 
      </div>
    </div>
  );
};

export default Aboutsection;
