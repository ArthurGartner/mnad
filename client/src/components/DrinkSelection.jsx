import React, { useState } from "react";
import "./DrinkSelection.css";
import { NavArrow, DrinkSummary } from "../components";

function DrinkSelection(props) {
  const [items, setItems] = useState(props.items);
  const [activeIndex, setActiveIndex] = useState(0);

  //Will load current drink HERE API CALL EXECUTE HERE

  // Function to handle the transition between carousel items, will probably be updated to call API on each click instead
  const handleTransition = (direction) => {
    if (direction === "left") {
      if (activeIndex === 0) {
        setActiveIndex(items.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
      props.setSentimentVal(10);
    } else {
      if (activeIndex === items.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
      props.setSentimentVal(90);
    }
  };

  return (
    <div className="carousel-container w-100 flex h-fit justify-between">
      <NavArrow handleFunction={handleTransition} dir="left" />
      <div className="grow">
        <DrinkSummary />
      </div>
      <NavArrow handleFunction={handleTransition} dir="right" />
    </div>
  );
}

export default DrinkSelection;
