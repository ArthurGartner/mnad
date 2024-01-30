import React, { useEffect, useState } from "react";
import { interpolateColor } from "~/util/helperfunctions";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  plus?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 300,
  plus = false,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [textColor, setTextColor] = useState("red");

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const delta = (value - displayValue) * (progress / duration);
      const nextValue = progress < duration ? displayValue + delta : value;

      setDisplayValue(nextValue);
      setTextColor(interpolateColor(nextValue));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, displayValue]);

  return (
    <div style={{ color: textColor }}>
      {plus && Math.round(displayValue) > 0 && "+"}
      {Math.round(displayValue)}
    </div>
  );
};

export default AnimatedNumber;
