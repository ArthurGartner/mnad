import React, { useState } from "react";
import "./DrinkSelection.css";
import DrinkSummary from "./DrinkSummary";

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
        className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={() => handleTransition("left")}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Carousel item */}
      <div className="grow">
        <DrinkSummary />
      </div>

      {/* Right button */}
      <button
        className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded button"
        onClick={() => handleTransition("right")}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default DrinkSelection;
