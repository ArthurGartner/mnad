import React from "react";

interface GradientTextProps {
  color1: string;
  color2: string;
  children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({
  color1,
  color2,
  children,
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
    WebkitBackgroundClip: "text", // Apply gradient to the text
    color: "transparent", // Hide the original text color
    display: "inline-block",
  };

  return <span style={gradientStyle}>{children}</span>;
};

export default GradientText;
