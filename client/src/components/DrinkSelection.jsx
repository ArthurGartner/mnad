import React, { useState } from "react";
import "./DrinkSelection.css";
import DrinkSummary from "./DrinkSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function DrinkSelection(props) {
  const [items, setItems] = useState(props.items);
  const [activeIndex, setActiveIndex] = useState(0);

  //Will load current drink HERE

  // Function to handle the transition between carousel items
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
      <div className="m-auto">
        <button
          className="hover:bg-blue-500 dark:hover:bg-blue-400 font-bold rounded-3xl h-[50px] w-[50px] text-blue-500 dark:text-blue-400 hover:text-neutral-100 dark:hover:text-neutral-700"
          onClick={() => handleTransition("left")}
        >
          <FontAwesomeIcon icon={faCaretLeft} className="h-[50px] w-[50px]" />
        </button>
      </div>
      <div className="grow">
        <DrinkSummary />
      </div>
      <div className="m-auto">
        <button
          className="hover:bg-blue-500 dark:hover:bg-blue-400 font-bold rounded-3xl h-[50px] w-[50px] text-blue-500 dark:text-blue-400 hover:text-neutral-100 dark:hover:text-neutral-700"
          onClick={() => handleTransition("right")}
        >
          <FontAwesomeIcon icon={faCaretRight} className="h-[50px] w-[50px]" />
        </button>
      </div>
    </div>
  );
}

export default DrinkSelection;
