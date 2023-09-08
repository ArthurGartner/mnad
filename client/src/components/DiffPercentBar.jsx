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

  const industryColors = {
    Politics: "bg-amber-400",
    World: "bg-indigo-400",
    Business: "bg-emerald-400",
    Technology: "bg-rose-400",
    Science: "bg-sky-400",
    Health: "bg-fuchsia-400",
    Sports: "bg-yellow-400",
    Entertainment: "bg-teal-400",
    Travel: "bg-purple-400",
    Education: "bg-pink-400",
    Environment: "bg-pink-400",
    Culture: "bg-pink-400",
    "Food & Drink": "bg-pink-400",
    Fashion: "bg-pink-400",
    "Real Estate": "bg-pink-400",
    Opinion: "bg-pink-400",
    Religion: "bg-pink-400",
    Lifestyle: "bg-pink-400",
    "Local News": "bg-pink-400",
    "Law & Crime": "bg-pink-400",
    Weather: "bg-pink-400",
    "Aerospace & Defense": "bg-pink-400",
    Arts: "bg-pink-400",
    Finance: "bg-pink-400",
    "Human Rights": "bg-pink-400",
    "Social Issues": "bg-pink-400",
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
              className={`h-full w-full rounded-full ${industryColors[name]}`}
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DiffPercentBar;
