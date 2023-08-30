import { useEffect, useState } from "react";

function lerpColor(minColor, midColor, maxColor, value) {
  // Convert a hex color to an RGB array [r, g, b]
  function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  // Convert an RGB array [r, g, b] to a hex color
  function rgbToHex(rgb) {
    return (
      "#" +
      ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
        .toString(16)
        .slice(1)
    );
  }

  // Linearly interpolate between two values
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  const minRgb = hexToRgb(minColor);
  const midRgb = hexToRgb(midColor);
  const maxRgb = hexToRgb(maxColor);

  let startColor, endColor, amt;

  if (value <= 50) {
    startColor = minRgb;
    endColor = midRgb;
    amt = value / 50;
  } else {
    startColor = midRgb;
    endColor = maxRgb;
    amt = (value - 50) / 50;
  }

  const r = Math.round(lerp(startColor[0], endColor[0], amt));
  const g = Math.round(lerp(startColor[1], endColor[1], amt));
  const b = Math.round(lerp(startColor[2], endColor[2], amt));

  return rgbToHex([r, g, b]);
}

const Tag = (props) => {
  const [tagColor, setColorTag] = useState(null);

  const colorMax = "#22c55e";
  const colorMin = "#ef4444";
  const colorMid = "#eab308";

  useEffect(() => {
    setColorTag(lerpColor(colorMin, colorMid, colorMax, props.val));
  }, [props]);

  return (
    <>
      <div
        style={{ backgroundColor: tagColor }}
        className={`inline-block px-[10px] rounded-xl text-sm md:text-base font-semibold text-white `}
      >
        Sentiment Score of {props.val}
      </div>
    </>
  );
};

export default Tag;
