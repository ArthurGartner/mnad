import React, { useState } from "react";
import "./DrinkSelection.css";
import DrinkSummary from "./DrinkSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function DrinkSelection(props) {
  const [items, setItems] = useState(props.items);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle the transition between carousel items
  const handleTransition = (direction) => {
    if (direction === "left") {
      if (activeIndex === 0) {
        setActiveIndex(items.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    } else {
      if (activeIndex === items.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }

    console.log(activeIndex);
  };

  return (
    <div className="carousel-container w-100 flex h-fit justify-between">
      {/* Left button */}
      <button
        className="hover:bg-neutral-100 dark:hover:bg-neutral-700 font-bold rounded"
        onClick={() => handleTransition("left")}
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="h-[50px] w-[50px] text-blue-500 dark:text-blue-400"
        />
      </button>

      {/* Carousel item */}
      <div className="grow">
        <DrinkSummary />
      </div>

      {/* Right button */}
      <button
        className="hover:bg-neutral-100 dark:hover:bg-neutral-700 font-bold rounded"
        onClick={() => handleTransition("right")}
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="h-[50px] w-[50px] text-blue-500 dark:text-blue-400"
        />
      </button>
    </div>
  );
}

export default DrinkSelection;
