import React from "react";
import NavbarApi from "./navbarapi";
const Navbar = () => {

  function listItem(curEle) {
    return (
      <li >
        <a href={curEle.link} className="navbarListItem">{curEle.name}</a>
      </li>
    );
  }
  return (
    <div className="navbar" >
      <div className="portfolio">
        <h2>Portfolio</h2>
        <a href=""> <i className="fa-solid fa-bars"></i></a>
      </div>
      <div className="sections">{NavbarApi.map(listItem)}
     </div>
   
    </div>
  );
};

export default Navbar;
