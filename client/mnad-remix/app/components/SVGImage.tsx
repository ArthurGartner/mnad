import React, { useState, useEffect } from "react";

interface SVGImageProps {
  url: string;
  fillColor: string;
}

const SVGImage: React.FC<SVGImageProps> = ({ url, fillColor }) => {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        let updatedSVG = data.replace(/fill="[^"]*"/g, `fill="${fillColor}"`);
        updatedSVG = updatedSVG.replace(
          /\.cls-1\s*\{[^}]*\}/g,
          `.cls-1 { fill: ${fillColor}; opacity: .5; }`
        );
        updatedSVG = updatedSVG.replace(
          /<svg/g,
          `<svg class="h-full w-full absolute top-0 left-0"`
        );

        const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(
          updatedSVG
        )}`;
        setDataUrl(svgDataUrl);
      })
      .catch((error) => {
        console.error("Error fetching the SVG: ", error);
      });
  }, [url, fillColor]);

  if (!dataUrl) return <></>;

  return (
    <img src={dataUrl} className="absolute h-full w-full object-contain" />
  );
};

export default SVGImage;
