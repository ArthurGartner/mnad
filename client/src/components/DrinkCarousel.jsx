import React from "react";
import { ViewDate, DrinkSelection } from "./";
import { logoCoconut } from "../assets";

function DrinkCarousel(props) {
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
    </div>
  );
}

export default DrinkCarousel;
