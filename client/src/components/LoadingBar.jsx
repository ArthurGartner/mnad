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
import { useEffect, useRef, useState } from "react";

function Progressbar({ value }) {
  const [color1, setColor1] = useState("from-indigo-500");
  const [color2, setColor2] = useState("to-pink-500");

  const colorCombos = [
    ["from-indigo-400", "to-pink-400"],
    ["from-indigo-400", "to-emerald-400"],
    ["from-sky-500", "to-green-300"],
    ["from-violet-400", "to-teal-400"],
  ];

  // className="bar bg-gradient-to-r from-indigo-500 to-sky-500"

  const progressTextRef = useRef(null);
  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;

    const barColor =
      colorCombos[Math.floor(Math.random() * colorCombos.length)];

    setColor1(barColor[0]);
    setColor2(barColor[1]);

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
    <div>
      <motion.div
        className="percentage-content text-end inline-block"
        animate={{
          width: `${value}%`,
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
        <div className="text-3xl font-semibold">{value}%</div>
      </motion.div>
      <div className="progressbar-container">
        <div className={`progressbar w-full`}>
          <motion.div
            className={`bar overflow-hidden`}
            animate={{
              width: `${value}%`,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <div
              className={`h-full w-screen bg-gradient-to-r ${color1} ${color2}`}
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
