import React from "react";
import { SVGImage } from "../components";

const DrinkPicture = () => {
  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass relative h-full w-full">
              <img
                className="absolute h-full w-full"
                src="https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass.svg"
              />
              <SVGImage
                className="h-full w-full absolute"
                url="https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass_full.svg"
                fillColor="brown"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPicture;
