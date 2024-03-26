import React from "react";
import Hero_img from "./hero-img";
import Hero_textdes from "./hero-textdes";
import Hero_button from "./hero_button";

const Herosection = () => {
  return (
    <>
      <div className="main-page" >
        <div className="hero-des" >
          <Hero_textdes />
          <Hero_button />
        </div>
        <Hero_img />
      </div>
    </>
  );
};

export default Herosection;
