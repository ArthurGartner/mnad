import React from "react";
import { DrinkPicture, DrinkInfo } from "./";
const DrinkSummary = () => {
  return (
    <div className="w-100 flex justify-between">
      <div className="w-1/2">
        <div className="h-full">
          <DrinkPicture />
        </div>
      </div>
      <div className="w-1/2">
        <DrinkInfo />
      </div>
    </div>
  );
};

export default DrinkSummary;
