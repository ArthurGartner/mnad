import React from "react";
import { DrinkPicture, DrinkInfo } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DrinkSummary = (props) => {
  const glassUrl =
    "https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass.svg";
  const svgImg =
    "https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass_full.svg";
  const liqColor = "green";
  return (
    <div className="w-100 flex justify-center md:justify-between h-full">
      <div className="md:w-1/2 w-full">
        <div className="h-full w-full">
          <DrinkPicture
            glassUrl={props.glassUrl}
            svgImg={props.svgImg}
            liqColor={props.liqColor}
          />
        </div>
      </div>
      <div className="hidden w-1/2 md:block">
        <DrinkInfo drinkData={props.drinkData} />
      </div>
    </div>
  );
};

export default DrinkSummary;
