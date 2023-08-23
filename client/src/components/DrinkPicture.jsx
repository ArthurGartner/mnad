import React from "react";
import { SVGImage } from "../components";

const DrinkPicture = (props) => {
  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass h-full w-full overflow-hidden">
              <img
                className="absolute h-full w-full object-cover"
                src={props.glassUrl}
              />
              <div className="absolute h-full w-full object-cover">
                <SVGImage url={props.svgImg} fillColor={props.liqColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPicture;
