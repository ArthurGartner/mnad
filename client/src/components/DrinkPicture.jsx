import React from "react";
import { ReactComponent as Liquid } from "../assets/liquid.svg";
import { empty_glass } from "../assets";
import SVGImage from "./SVGImage";

const DrinkPicture = () => {
  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass relative h-full w-full">
              <img
                className="absolute h-full w-full"
                src="https://mightneedadrink.s3.amazonaws.com/drink-images/brandy_snifter_glass.svg"
              />
              <SVGImage
                className="h-full w-full absolute"
                url="https://mightneedadrink.s3.amazonaws.com/drink-images/brandy_snifter_glass_full.svg"
                fillColor="purple"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPicture;
