// import React, { Component } from "react";
// import { css, keyframes, motion } from "@emotion/react";

// // Create the keyframes
// const fillAnimation = keyframes`
//   0% {
//     width: 0%;
//   }
//   100% {
//     width: 100%;
//   }
// `;

// // Styling
// const styles = {
//   loadingBar: {
//     // background: "linear-gradient(to right, #e66465, #9198e5)",
//     background: "linear-gradient(to right, #6EF195, #00E3FD)",
//     animation: `${fillAnimation} 5s ease-in-out`,
//     animate: fillAnimation,
//     animationFillMode: "forwards",
//     height: "30px",
//     width: "10%",
//     borderRadius: "30px",
//   },
// };

// class AnimatedLoadingBar extends Component {
//   render() {
//     return <motion.div style={styles.loadingBar} />;
//   }
// }

// export default AnimatedLoadingBar;

import "./progressbar.css";
import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Progressbar({ value }) {
  const progressTextRef = useRef(null);
  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: (cv) => {
          progressTextRef.current.textContent = cv.toFixed(0);
        },
      });
    }
  }, [value]);
  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default Progressbar;
