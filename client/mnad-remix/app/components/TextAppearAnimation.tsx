import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import GradientText from "./GradientText";
import { interpolateColor } from "~/util/helperfunctions";

interface TextAppearAnimationProps {
  text: string;
  delay?: number;
  key: string;
  gradient?: boolean;
  color1: string;
  color2: string;
}

const TextAppearAnimation: React.FC<TextAppearAnimationProps> = ({
  text,
  delay = 0,
  key,
  gradient = false,
  color1,
  color2,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateTextAppearance = async () => {
      // Wait for the specified delay (if any)
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      // Animate the text from the bottom up
      await controls.start({ opacity: 1, y: 0 });
    };

    animateTextAppearance();
  }, [delay, controls]);

  const exitAnimation = {
    opacity: 0,
    y: -20, // Move the text slightly upward during exit
  };

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20 }}
      animate={controls} // Use controls to animate the motion.div
      exit={exitAnimation} // Add exit animation
      transition={{ duration: 0.3 }} // Adjust the exit animation duration as needed
    >
      {gradient && (
        <GradientText color1={color1} color2={color2}>
          {text}
        </GradientText>
      )}
      {!gradient && <>{text}</>}
    </motion.div>
  );
};

export default TextAppearAnimation;
