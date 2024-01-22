import React, { useEffect, useState } from "react";
import colors from "~/styles/colors";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 300,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [textColor, setTextColor] = useState("red");

  const parseRGB = (colorString: string) => {
    const matchResult = colorString.match(/\d+/g);
    if (matchResult) {
      const [r, g, b] = matchResult.map(Number);
      return { r, g, b };
    } else {
      return { r: 0, g: 0, b: 0 };
    }
  };

  const interpolateColor = (value: number): string => {
    const redColor = parseRGB(colors.gloomyRed.light);
    const yellowColor = parseRGB(colors.balancedYellow.light);
    const greenColor = parseRGB(colors.cheerfulGreen.light);

    let r, g;

    if (value <= 50) {
      // Transition from red to yellow
      r = redColor.r + (yellowColor.r - redColor.r) * (value / 50);
      g = redColor.g + (yellowColor.g - redColor.g) * (value / 50);
    } else {
      // Transition from yellow to green
      r = yellowColor.r + (greenColor.r - yellowColor.r) * ((value - 50) / 50);
      g = yellowColor.g + (greenColor.g - yellowColor.g) * ((value - 50) / 50);
    }

    return `rgb(${Math.round(r)}, ${Math.round(g)}, 0)`;
  };

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

  return <div style={{ color: textColor }}>{Math.round(displayValue)}</div>;
};

export default AnimatedNumber;
