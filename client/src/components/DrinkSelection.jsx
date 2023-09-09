import React, { useState, useRef, useEffect } from "react";
import "./DrinkSelection.css";
import { NavArrow, DrinkSummary, LoadingIcon } from "../components";

function DrinkSelection(props) {
  const carouselContainerRef = useRef(null);
  const [xstart, setXStart] = useState(0);
  const [xend, setXEnd] = useState(0);
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
    if (direction === "left" && props.yesterdayData != null) {
      props.decreaseDate();
    } else if (props.tomorrowData != null) {
      props.increaseDate();
    }
  };
  return (
    <div
      ref={carouselContainerRef}
      className="carousel-container w-100 flex h-[400px] md:h-[600px] justify-between"
    >
      <div className="flex h-[400px] md:h-[600px] w-[50px]">
        <NavArrow
          handleFunction={handleTransition}
          disabled={props.yesterdayData == null ? true : false}
          dir="left"
        />
      </div>

      <div className="grow align-middle">
        {drinkData ? (
          <DrinkSummary drinkData={drinkData} viewPic={props.viewPic} />
        ) : (
          <div className="text-black dark:text-white flex justify-center items-center h-full">
            <LoadingIcon />
          </div>
        )}
      </div>
      <div className=" flex h-[400px] md:h-[600px] w-[50px]">
        <NavArrow
          handleFunction={handleTransition}
          disabled={props.tomorrowData == null ? true : false}
          dir="right"
        />
      </div>
    </div>
  );
}

export default DrinkSelection;
