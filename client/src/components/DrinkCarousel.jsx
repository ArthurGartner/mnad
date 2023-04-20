import React from "react";
import { ViewDate, DrinkSelection } from "./";
import { logoCoconut } from "../assets";

const DrinkCarousel = ({ date }) => {
  const items = [
    <img src={logoCoconut} alt="Image 1" className="h-full w-full" />,
    <img src={logoCoconut} alt="Image 2" />,
    <img src={logoCoconut} alt="Image 3" />,
    <img src={logoCoconut} alt="Image 4" />,
  ];
  return (
    <div>
      <ViewDate date={date} />
      <DrinkSelection items={items} />
    </div>
  );
};

export default DrinkCarousel;
