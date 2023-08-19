import React from "react";

const SVGModifier = ({ value }) => {
  const startX = 366.37;
  const endX = 619.75;
  const midX = (startX + endX) / 2;

  const startY = 758.64;

  // Calculate the Y difference based on value
  const deltaY = (50 - value) * 1.7; // Adjust multiplier to control curvature intensity

  const controlPointX1 = midX - (endX - startX) / 4;
  const controlPointX2 = midX + (endX - startX) / 4;
  const controlPointY1 = startY - deltaY;
  const controlPointY2 = startY - deltaY;

  return (
    <svg
      id="mouth_only"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <style>
          {`.smile-1{fill:none;stroke:#231f20;stroke-linecap:round;stroke-miterlimit:10;stroke-width:17px;}`}
        </style>
      </defs>
      <path
        className="smile-1"
        d={`M ${startX} ${startY} C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${endX} ${startY}`}
      />
    </svg>
  );
};

export default SVGModifier;
