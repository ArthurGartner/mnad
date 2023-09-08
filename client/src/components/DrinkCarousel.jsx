import React, { useState, useEffect } from "react";
import { ViewDate, DrinkSelection } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function DrinkCarousel(props) {
  const liked = "86";

  const [dayData, setDayData] = useState(null);
  const [viewPic, setViewPic] = useState(true);
  const [yesterdayData, setYesterdayData] = useState(null);

  useEffect(() => {
    setDayData(props.dayData);
    setYesterdayData(props.yesterdayData);
    console.log(props.dayData);
  }, [props]);

  const handleView = () => {
    setViewPic(!viewPic);
  };

  return (
    <div className="h-[500px] md:h-[650px]">
      <ViewDate date={props.curDate} abvDiff={props.abvDiff} />
      <DrinkSelection
        setSentimentVal={props.setSentimentVal}
        drinkData={dayData?.drinkDetails}
        increaseDate={props.increaseDate}
        decreaseDate={props.decreaseDate}
        viewPic={viewPic}
      />
      <div className="md:hidden w-full">
        <div className="text-black dark:text-white font-bold text-md text-center w-full">
          {dayData?.drinkDetails?.strDrink}
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-400 text-center">
          {dayData?.drinkDetails?.abv}% ABV | {liked}%{" "}
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
