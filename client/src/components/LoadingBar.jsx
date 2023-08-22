import "./progressbar.css";
import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

function Progressbar({ value }) {
  const [color1, setColor1] = useState("from-indigo-500");
  const [color2, setColor2] = useState("to-pink-500");
  const [offSet, setOffSet] = useState(value);
  const { number } = useSpring({
    from: { number: 0 },
    number: parseInt(value),
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });

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

    var offset = parseInt(value);
    setOffSet(offset >= 100 ? 100 : offset);

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
        className="percentage-content text-end inline-block relative"
        animate={{
          width: `min(calc(${parseInt(offSet)}% + 30px), 100%)`,
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
        <div className="text-3xl font-semibold text-black dark:text-white">
          <animated.div className="inline">
            {number.to((value) => value.toFixed(0))}
          </animated.div>
          <div className="inline">%</div>
        </div>
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
      <div className="flex justify-between w-100 text-lg font-semibold text-center text-neutral-400">
        <div>Gloomy</div>
        <div>Cheerful</div>
      </div>
    </div>
  );
}

export default Progressbar;
