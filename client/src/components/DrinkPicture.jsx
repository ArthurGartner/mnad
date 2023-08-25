import React, { useState, useEffect } from "react";
import { SVGImage } from "../components";

const DrinkPicture = (props) => {
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    setDrinkData(props.drinkData);
  }, [props]);

  if (!drinkData) {
    return <></>;
  }
  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass h-full w-full overflow-hidden">
              <img
                className="absolute h-full w-full object-cover"
                src={drinkData?.glass_url}
              />
              <div className="absolute h-full w-full object-cover">
                <SVGImage
                  url={drinkData?.liquid_url}
                  fillColor={drinkData?.liqColor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPicture;
