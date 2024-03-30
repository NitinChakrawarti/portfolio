import React, { useState } from "react";

const Show_more = ({ children }) => {
  const text = children;
  const [moreAbout, setAbout] = useState(true);

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

  function aboutClicked() {
    setAbout(!moreAbout);
  }

  return (
    <>
      <div className="about_des" style={{height:moreAbout? '8vh' :'40vh'}}>
        <h1 className="about_des_h1">About Me</h1>
        <h2>Let me Introduce Myself</h2>

        <p>{moreAbout ? text.slice(0, 250) : text}</p>
        <button
          className="about_btn hero_btn"
          style={style}
          onMouseOver={herobtn_over}
          onMouseLeave={heobtn_leave}
          onClick={aboutClicked}
          id="skills"
        >
          {moreAbout ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
};

const About_btn = () => {
  return (
    <div>
      <Show_more>
        Hey there! I'm Nitin Chakrawarti, a B.tech 1st year student and Frontend
        web Developer. I love turning ideas into functional websites. Passionate
        about creativity and problem-solving, I thrive on crafting seamless user
        experiences My journey in technology began with a curiosity-driven
        exploration of programming languages and software development. Along the
        way, I've honed my skills in front-end. I'm constantly seeking ways to
        innovate and elevate the digital experience. Outside of coding, you'll
        find me exploring the intersection of technology and design,
        experimenting with new frameworks, or immersing myself in the vibrant
        tech community. I thrive in collaborative environments and I am always
        eager to learn from my fellow enthusiasts.
      </Show_more>
    </div>
  );
};

export default About_btn;
