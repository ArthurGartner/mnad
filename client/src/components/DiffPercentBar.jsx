import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

function DiffPercentBar({ value, reverse = false, name, passedbgColor }) {
  const [color1, setColor1] = useState("from-indigo-500");
  const [color2, setColor2] = useState("to-pink-500");
  const [offSet, setOffSet] = useState(value);
  const [bgColor, setbgColor] = useState(null);
  const { number } = useSpring({
    from: { number: 0 },
    number: parseInt(value),
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    setbgColor(passedbgColor);
  }, [passedbgColor]);

  const colorCombos = [
    ["from-indigo-400", "to-pink-400"],
    ["from-indigo-400", "to-emerald-400"],
    ["from-sky-500", "to-green-300"],
    ["from-violet-400", "to-teal-400"],
  ];

  // useEffect(() => {
  //   const barColor =
  //     colorCombos[Math.floor(Math.random() * colorCombos.length)];
  //   setColor1(barColor[0]);
  //   setColor2(barColor[1]);
  // }, [value]);

  const industryColors = {
    Business: "bg-amber-400",
    Technology: "bg-indigo-400",
    Health: "bg-emerald-400",
    Science: "bg-rose-400",
  };

  return (
    <div>
      <div className="flex row align-middle">
        <div className="w-full h-4 md:h-8 rounded-full bg-transparent overflow-hidden relative">
          <motion.div
            className={`h-full rounded-full ${
              reverse ? "right-0" : "left-0"
            } absolute`}
            animate={{
              width: `${value}%`,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <div
              // className={`h-full w-full rounded-full ${
              //   reverse ? "bg-gradient-to-l" : "bg-gradient-to-r"
              // } ${color1} ${color2}`}
              className={`h-full w-full rounded-full ${industryColors[name]}`}
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DiffPercentBar;
