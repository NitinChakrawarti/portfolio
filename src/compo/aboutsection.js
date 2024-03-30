import React, {useState} from "react";
import "./about.css";
import "./hero_btn.css";
import './aboutrespon.css';
import About_btn from "./about_btn";
const Aboutsection = () => {
   

  return (
    <div className="about_sec" id="about">
      <div className="about_des_im">
        <img
          src="https://vrajinfosolution.com/wp-content/uploads/2023/04/development.png"
          alt="about image"
          className="about_img"
        />
      </div>
      <About_btn />
      
    </div>
  );
};

export default Aboutsection;
