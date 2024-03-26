import React, {useEffect} from 'react'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedProgressBar = (props) => {
  const { ref, inview } = useInView()
  const controls = useAnimation()
const percentage = props.progress 
  useEffect(() => {
    if (inview) {
        console.log(percentage)
        controls.start({
        width: 'percentage',
        transition: {
          duration: 1
        }
      })
    }
  }, [controls, inview, percentage])

  return (
    <>
      <h2 className="csshillh3">{props.skillname}</h2>
      <div className="progress-bar">
        <motion.div
        ref={ref}
        animate={controls}
        initial={{width:0}}
        style={{
            width:'0',
            height:'100%',
            backgroundColor:"blue",
            display:'flex',
            justifyContent:"end",

        }}
        >
          <span>{percentage}%</span>


          </motion.div>
        </div>
        
     
    </>
  );
};

export default AnimatedProgressBar;
