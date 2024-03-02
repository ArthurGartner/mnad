import React, { useEffect, useState } from "react";
import { interpolateColor } from "~/util/helperfunctions";
import colors from "~/styles/colors";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  plus?: boolean;
  color?: boolean;
  abs?: boolean;
  binary?: boolean;
  decimal?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 300,
  plus = false,
  color = true,
  abs = false,
  binary = false,
  decimal = false, // Initialize decimal flag
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value);
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

  // Function to format the displayed value based on the decimal flag
  const formatValue = (value: number) => {
    if (decimal) {
      // Show value with 2 decimal places if decimal flag is true
      return value.toFixed(2);
    } else {
      // Round to nearest integer if decimal flag is false
      return Math.round(value);
    }
  };

  return (
    <div
      style={
        color
          ? { color: textColor }
          : binary
          ? value > 0
            ? { color: colors.cheerfulGreen.light }
            : { color: colors.gloomyRed.light }
          : {}
      }
    >
      {plus && displayValue > 0 && "+"}
      {abs
        ? Math.abs(Number(formatValue(displayValue)))
        : formatValue(displayValue)}
    </div>
  );
};

export default AnimatedNumber;
