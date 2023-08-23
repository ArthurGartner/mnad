import React from "react";
import { DrinkPicture, DrinkInfo } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DrinkSummary = () => {
  return (
    <div className="w-100 flex justify-center md:justify-between h-full">
      <div className="w-1/2">
        <div className="h-full w-full">
          <DrinkPicture />
        </div>
      </div>
      <div className="hidden w-1/2 md:block">
        <DrinkInfo />
      </div>
    </div>
  );
};

export default DrinkSummary;
