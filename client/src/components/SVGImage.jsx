import React, { useState, useEffect } from "react";

const SVGImage = ({ url, fillColor }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // Modify the SVG fill color in fill attributes
        let updatedSVG = data.replace(/fill="[^"]*"/g, `fill="${fillColor}"`);
        // Modify the SVG fill color within style definitions
        updatedSVG = updatedSVG.replace(
          /\.cls-1\s*\{[^}]*\}/g,
          `.cls-1 { fill: ${fillColor}; opacity: .5; }`
        );
        updatedSVG = updatedSVG.replace(/<svg/g, `<svg class="h-full w-full"`);
        setSvgContent(updatedSVG);
      })
      .catch((error) => {
        console.error("Error fetching the SVG: ", error);
      });
  }, [url, fillColor]);

  return (
    <div
      className="svg-container h-full"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SVGImage;
