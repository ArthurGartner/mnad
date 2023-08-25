import React, { useState, useRef, useEffect } from "react";
import "./DrinkSelection.css";
import { NavArrow, DrinkSummary } from "../components";

function DrinkSelection(props) {
  // const [items, setItems] = useState(props.items);
  // const [activeIndex, setActiveIndex] = useState(0);
  const carouselContainerRef = useRef(null);
  const [xstart, setXStart] = useState(0);
  const [xend, setXEnd] = useState(0);
  const [drinkData, setDrinkData] = useState(null);

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
    setDrinkData(props.drinkData);
  }, [props]);

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
    console.log("STARTED");
  };

  const touchMoveHandler = (e) => {
    // Usually used for preventing default swipe actions of the browser
    console.log("TEST");
  };

  const touchEndHandler = (e) => {
    setXEnd(e.changedTouches[0].clientX);
    console.log("COMPLETED");
  };

  const handleTransition = (direction) => {
    if (direction === "left") {
      props.setSentimentVal(10);
      props.decreaseDate();
    } else {
      props.setSentimentVal(90);
      props.increaseDate();
    }
  };

  if (!drinkData) {
    return <></>;
  }

  return (
    <div
      ref={carouselContainerRef}
      className="carousel-container w-100 flex h-[300px] md:h-fit justify-between"
    >
      <NavArrow handleFunction={handleTransition} dir="left" />
      <div className="grow">
        <DrinkSummary
          glassUrl={drinkData?.glass_url}
          svgImg={drinkData?.liquid_url}
          liqColor={drinkData?.liqColor}
          drinkData={drinkData}
        />
      </div>
      <NavArrow handleFunction={handleTransition} dir="right" />
    </div>
  );
}

export default DrinkSelection;
