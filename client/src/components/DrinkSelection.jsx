import React, { useState, useRef, useEffect } from "react";
import "./DrinkSelection.css";
import {
  NavArrow,
  DrinkSummary,
  LoadingIcon,
  CountdownClock,
} from "../components";
import { isTomorrow, getNext5PMEastern } from "../../util/functions";

function DrinkSelection(props) {
  const carouselContainerRef = useRef(null);
  const [xstart, setXStart] = useState(0);
  const [xend, setXEnd] = useState(0);
  const [drinkData, setDrinkData] = useState(null);
  const [Tomorrow, setTomorrow] = useState(false);

  useEffect(() => {
    setTomorrow(isTomorrow(new Date(props.curDate)));
  }, [props.curDate]);

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
    } else if (props.dayData != null) {
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
          <DrinkSummary
            drinkData={drinkData}
            viewPic={props.viewPic}
            isTomorrow={isTomorrow}
          />
        ) : Tomorrow ? (
          <>
            {" "}
            <div className="text-black dark:text-white flex justify-center items-center h-full">
              <div>
                <div className="text-xl md:text-3xl font-semibold text-center my-5">
                  You're Early!
                </div>
                <div className="text-xl md:text-3xl font-semibold text-center my-5">
                  Come back at 5PM Eastern for Happy Hour
                </div>
                <div className="text-md md:text-lg font-semibold text-center text-neutral-400 my-5">
                  A new drink will be recommended in
                </div>
                <div className="text-center text-5xl md:text-8xl font-semibold">
                  <CountdownClock
                    startDate={new Date()}
                    endDate={props.next5pm}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-black dark:text-white flex justify-center items-center h-full">
            <LoadingIcon />
          </div>
        )}
      </div>
      <div className=" flex h-[400px] md:h-[600px] w-[50px]">
        <NavArrow
          handleFunction={handleTransition}
          disabled={
            props.drinkData == null && props.tomorrowData == null ? true : false
          }
          dir="right"
        />
      </div>
    </div>
  );
}

export default DrinkSelection;
