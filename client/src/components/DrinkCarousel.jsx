import React from "react";
import { ViewDate, DrinkSelection } from "./";
import { logoCoconut } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function DrinkCarousel(props) {
  const drinkName = "Long Island Iced Tea";
  const percent = "22";
  const liked = "86";
  const items = [
    <img src={logoCoconut} alt="Image 1" className="h-full w-full" />,
    <img src={logoCoconut} alt="Image 2" />,
    <img src={logoCoconut} alt="Image 3" />,
    <img src={logoCoconut} alt="Image 4" />,
  ];

  return (
    <div>
      <ViewDate date={props.curDate} />
      <DrinkSelection items={items} setSentimentVal={props.setSentimentVal} />
      <div className="md:hidden w-full">
        <div className="text-black dark:text-white font-bold text-md text-center w-full">
          {drinkName}
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-400 text-center">
          {percent}% ABV | {liked}% <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="text-xs md:text-sm font-semibold text-blue-500 dark:text-blue-400 text-center">
          View Drink Information
        </div>
      </div>
    </div>
  );
}

export default DrinkCarousel;
