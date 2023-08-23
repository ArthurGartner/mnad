import React from "react";
import { SVGImage } from "../components";

const DrinkPicture = () => {
  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass h-full w-full overflow-hidden">
              <img
                className="absolute h-full w-full object-cover"
                src="https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass.svg"
              />
              <div className="absolute h-full w-full object-cover">
                <SVGImage
                  url="https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass_full.svg"
                  fillColor="brown"
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
