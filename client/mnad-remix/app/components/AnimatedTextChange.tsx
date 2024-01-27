import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface TextValueChangeAnimationProps {
  initialValue: string;
  finalValue: string;
  delay?: number;
}

const TextValueChangeAnimation: React.FC<TextValueChangeAnimationProps> = ({
  initialValue,
  finalValue,
  delay = 0,
}) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const controls = useAnimation();

  useEffect(() => {
    const animateTextChange = async () => {
      // Animate the previous value up and fade out
      await controls.start({ opacity: 0, y: -10 });

      // Wait for the previous animation to complete
      await controls.start({ opacity: 0, y: 0 });

      // Update the current value
      setCurrentValue(finalValue);

      // Animate the new value up and fade in
      await controls.start({ opacity: 1, y: 0 });
    };

    if (finalValue !== currentValue) {
      setTimeout(() => {
        animateTextChange();
      }, delay);
    }
  }, [currentValue, finalValue, controls, delay]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={controls}
        className="absolute w-full flex justify-center items-center"
      >
        {currentValue}
      </motion.div>
    </div>
  );
};

export default TextValueChangeAnimation;
