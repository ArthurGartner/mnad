import React, { useState, useRef, useEffect } from "react";
import "./DrinkSelection.css";
import { NavArrow, DrinkSummary } from "../components";

function DrinkSelection(props) {
  const carouselContainerRef = useRef(null);
  const [xstart, setXStart] = useState(0);
  const [xend, setXEnd] = useState(0);
  const [liqGlass, setLiqGlass] = useState(null);
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    setDrinkData(props.drinkData);
  }, [props]);

  useEffect(() => {
    // Assign touch event handlers if the ref exists
    const container = carouselContainerRef.current;

    if (container) {
      container.addEventListener("touchstart", touchStartHandler);
      container.addEventListener("touchmove", touchMoveHandler);
      container.addEventListener("touchend", touchEndHandler);
    }

    return () => {
      // Cleanup
      if (container) {
        container.removeEventListener("touchstart", touchStartHandler);
        container.removeEventListener("touchmove", touchMoveHandler);
        container.removeEventListener("touchend", touchEndHandler);
      }
    };
  }, [carouselContainerRef]);

  useEffect(() => {
    const distance = xend - xstart;

    if (distance > 50) {
      // Swiped right
      handleTransition("left");
    } else if (distance < -50) {
      // Swiped left
      handleTransition("right");
    }
  }, [xend]);

  const touchStartHandler = (e) => {
    const newStartX = e.touches[0].clientX;
    setXStart(newStartX);
  };

  const touchMoveHandler = (e) => {
    // Usually used for preventing default swipe actions of the browser
  };

  const touchEndHandler = (e) => {
    setXEnd(e.changedTouches[0].clientX);
  };

  const handleTransition = (direction) => {
    if (direction === "left") {
      props.decreaseDate();
      props.setSentimentVal(10);
    } else {
      props.increaseDate();
      props.setSentimentVal(90);
    }
  };

  return (
    <div
      ref={carouselContainerRef}
      className="carousel-container w-100 flex h-[300px] md:h-fit justify-between"
    >
      <NavArrow handleFunction={handleTransition} dir="left" />
      <div className="grow">
        {drinkData && <DrinkSummary drinkData={drinkData} />}
      </div>
      <NavArrow handleFunction={handleTransition} dir="right" />
    </div>
  );
}

export default DrinkSelection;
