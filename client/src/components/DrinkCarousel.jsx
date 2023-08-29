import React, { useState, useEffect } from "react";
import { ViewDate, DrinkSelection } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function DrinkCarousel(props) {
  const liked = "86";

  const [drinkData, setDrinkData] = useState(null);
  const [viewPic, setViewPic] = useState(false);

  useEffect(() => {
    setDrinkData(props.drinkData);
  }, [props]);

  const handleView = () => {
    setViewPic(!viewPic);
    console.log("HELLO");
  };

  if (!drinkData) {
    return <></>;
  }

  return (
    <div className="h-[500px] md:h-[650px]">
      <ViewDate date={props.curDate} />
      <DrinkSelection
        setSentimentVal={props.setSentimentVal}
        drinkData={drinkData}
        increaseDate={props.increaseDate}
        decreaseDate={props.decreaseDate}
        viewPic={viewPic}
      />
      <div className="md:hidden w-full">
        <div className="text-black dark:text-white font-bold text-md text-center w-full">
          {drinkData?.strDrink}
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-400 text-center">
          {drinkData?.abv.$numberDecimal}% ABV | {liked}%{" "}
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
