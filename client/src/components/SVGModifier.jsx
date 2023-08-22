import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SVGModifier = ({ value }) => {
  const pathRef = useRef(null);
  const startX = 366.37;
  const endX = 619.75;
  const midX = (startX + endX) / 2;

  const startY = 758.64;

  useEffect(() => {
    // Calculate the Y difference based on value
    const deltaY = (50 - value) * 1.7; // Adjust multiplier to control curvature intensity

    const controlPointX1 = midX - (endX - startX) / 4;
    const controlPointX2 = midX + (endX - startX) / 4;
    const controlPointY1 = startY - deltaY;
    const controlPointY2 = startY - deltaY;

    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: {
          d: `M ${startX} ${startY} C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, 619.75 ${startY}`,
        },
        duration: 0.5, // animation duration in seconds
        ease: "power2.out",
      });
    }
  }, [value]);

  return (
    <svg
      id="mouth_only"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <style>
          {`.smile-1{fill:none;stroke:#231f20;stroke-linecap:round;stroke-miterlimit:10;stroke-width:30px;}`}
        </style>
      </defs>
      <path
        ref={pathRef}
        className="smile-1"
        d={`M ${startX} ${startY} C 429.715 758.64, 556.405 758.64 ${endX} ${startY}`}
      />
    </svg>
  );
};

export default SVGModifier;
