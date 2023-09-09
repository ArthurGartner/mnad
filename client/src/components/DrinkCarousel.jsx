import React, { useState, useEffect } from "react";
import { ViewDate, DrinkSelection } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function DrinkCarousel(props) {
  const liked = "86";
  const [viewPic, setViewPic] = useState(true);

  const handleView = () => {
    setViewPic(!viewPic);
  };

  return (
    <div className="h-[500px] md:h-[650px]">
      <ViewDate date={props.curDate} abvDiff={props.abvDiff} />
      <DrinkSelection
        setSentimentVal={props.setSentimentVal}
        drinkData={props.dayData?.drinkDetails}
        increaseDate={props.increaseDate}
        decreaseDate={props.decreaseDate}
        viewPic={viewPic}
        dayData={props.dayData}
        yesterdayData={props.yesterdayData}
        tomorrowData={props.tomorrowData}
      />
      <div className="md:hidden w-full">
        <div className="text-black dark:text-white font-bold text-md text-center w-full">
          {props.dayData?.drinkDetails?.strDrink}
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-400 text-center">
          {props.dayData?.drinkDetails?.abv}% ABV | {liked}%{" "}
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div
          className="text-xs md:text-sm font-semibold text-blue-500 dark:text-blue-400 text-center hover:cursor-pointer"
          onClick={handleView}
        >
          {viewPic && "View Drink Information"}
          {!viewPic && "View Drink Picture"}
        </div>
      </div>
    </div>
  );
}

export default DrinkCarousel;
