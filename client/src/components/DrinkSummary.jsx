import React, { useState, useEffect } from "react";
import { DrinkPicture, DrinkInfo } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DrinkSummary = (props) => {
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    setDrinkData(props.drinkData);
  }, [props]);

  if (!drinkData) {
    return <></>;
  }

  return (
    <div className="w-100 md:flex md:justify-between h-full relative">
      <div className={`md:w-1/2 w-full ${props.viewPic ? "h-full" : ""}`}>
        <div
          className={`${props.viewPic ? "" : "hidden md:block"} h-full w-full`}
        >
          <DrinkPicture drinkData={drinkData} />
        </div>
      </div>
      <div
        className={`${props.viewPic ? "hidden" : ""} w-100 md:w-1/2 md:block`}
      >
        <DrinkInfo drinkData={props.drinkData} />
      </div>
    </div>
  );
};

export default DrinkSummary;
