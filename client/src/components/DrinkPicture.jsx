import React, { useState, useEffect } from "react";
import { SVGImage } from "../components";

const DrinkPicture = (props) => {
  const [drinkData, setDrinkData] = useState(null);
  const [drinkColor, setDrinkColor] = useState("#FFFFFF");

  useEffect(() => {
    setDrinkData(props.drinkData);
  }, [props]);

  useEffect(() => {
    if (drinkData) {
      mixColors(drinkData.ingredients);
    }
  }, [drinkData]);

  if (!drinkData) {
    return <></>;
  }

  function mixColors(objects) {
    let totalVolume = 0;
    let red = 0;
    let green = 0;
    let blue = 0;

    // Calculate the total volume of all liquid ingredients
    for (let object of objects) {
      if (object.form === "liquid") {
        totalVolume += parseFloat(object.volume_oz.$numberDecimal);
      }
    }

    // If there is no liquid, return a default color (e.g., black)
    if (totalVolume === 0) {
      return "#FFFFFF";
    }

    // Mix the colors
    for (let object of objects) {
      if (object.form === "liquid") {
        let ratio = object.volume_oz.$numberDecimal / totalVolume;
        let hexColor = object.color_hex;
        let r = parseInt(hexColor.substr(1, 2), 16);
        let g = parseInt(hexColor.substr(3, 2), 16);
        let b = parseInt(hexColor.substr(5, 2), 16);

        red += r * ratio;
        green += g * ratio;
        blue += b * ratio;
      }
    }

    // Find the maximum RGB component
    const maxComponent = Math.max(red, green, blue);

    // Normalize so that all components are within 0-255
    if (maxComponent > 255) {
      red = (red / maxComponent) * 255;
      green = (green / maxComponent) * 255;
      blue = (blue / maxComponent) * 255;
    }

    // Round and convert to hexadecimal
    red = Math.round(red).toString(16).padStart(2, "0");
    green = Math.round(green).toString(16).padStart(2, "0");
    blue = Math.round(blue).toString(16).padStart(2, "0");

    setDrinkColor("#" + red + green + blue);
  }

  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass h-full w-full overflow-hidden svg-drink">
              <img
                className="absolute h-full w-full object-cover"
                src={drinkData?.drinkGlass[0]?.glass_url}
              />
              <div className="absolute h-full w-full object-cover">
                {drinkData?.drinkGlass[0]?.liquid_url && (
                  <SVGImage
                    key={drinkColor} // Key based on `drinkColor`
                    url={drinkData?.drinkGlass[0]?.liquid_url}
                    fillColor={drinkColor}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPicture;
