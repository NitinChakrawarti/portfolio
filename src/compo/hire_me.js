import React, { useState } from "react";
import "./hire-me.css";
import fromApi from "./forminfo";

const Hire_me = () => {
  function formEle(curElee) {
    return (
      <input
        type={curElee.type}
        placeholder={curElee.placeholder}
        className="form_btn"
      />
    );
  }
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
    <div>
      <div className="hire-me">
        <h1 className="hire-me_h1 about_des_h1">Contact</h1>
        <h2>Get in touch </h2>
        <form action="" className="form_entity">
          {fromApi.map(formEle)}
          <button
            className="about_btn hero_btn"
            style={style}
            onMouseOver={herobtn_over}
            onMouseLeave={heobtn_leave}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hire_me;
