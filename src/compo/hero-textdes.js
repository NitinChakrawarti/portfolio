import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Hero_textdes = () => {
  return (
    <div className="herosection" id="home">
      <h3>Myself </h3>
      <h2>Nitin Chakrawarti</h2>
      <span>
        <h2>& I'm</h2>
      </span>
      <span style={{ color: 'aliceblue', fontWeight: 'bold', fontSize:'6vmin' }}>
        <Typewriter
          words={["Frontend Developer","React Developer"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={900}
        />
      </span>
    </div>
  );
};

export default Hero_textdes;
