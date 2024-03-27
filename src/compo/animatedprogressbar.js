import React, { useEffect } from 'react';
import './skills.css';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedProgressBar = (props) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const percentage = props.progress;

  useEffect(() => {
    if (inView) {
      console.log(percentage);
      controls.start({
        width: "90%",
        transition: {
          duration: 1,
        },
      });
    }
  }, [controls, inView, percentage]);

  return (
    <>
      <h2 className="csshillh3">{props.skillname}</h2>
      <div className="progress-bar">
        <AnimatePresence>
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ width: 0 }}
            style={{
              height: '100%',
              backgroundColor: 'blue',
              display: 'flex',
              justifyContent: 'end',
              border: '1px solid red',
            }}
          >
            <span>{percentage}%</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default AnimatedProgressBar;
