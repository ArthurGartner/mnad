// src/components/AnimatedNumber.tsx

import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 300,
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const delta = (value - displayValue) * (progress / duration);
      const nextValue = progress < duration ? displayValue + delta : value;

      setDisplayValue(nextValue);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, displayValue]);

  return <div>{Math.round(displayValue)}</div>;
};

export default AnimatedNumber;
