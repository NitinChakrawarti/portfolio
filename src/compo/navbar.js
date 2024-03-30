import React, { useState } from "react";
import NavbarApi from "./navbarapi";
const Navbar = () => {

const [sectionstate, setSectionState] =useState(true);


function menuiconclicked(){
  console.log("button clicked");
  setSectionState(!sectionstate)
}
const sectionStyle={
  left:sectionstate ?"-100%" :"0%"
}
  function listItem(curEle,index) {
    return <a href={curEle.link} key={index} onClick={menuiconclicked}  className="navbarListItem">{curEle.name}</a>;
  }
  return (
    <div className="navbar" >
      <div className="portfolio">
        <h2>Portfolio</h2>
        <i className="fa-solid fa-bars" onClick={menuiconclicked}></i>
      </div>
      <div className="sections" style={sectionStyle}>{NavbarApi.map(listItem)}
     </div>
   
    </div>
  );
};

export default Navbar;
