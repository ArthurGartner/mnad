import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const NavArrow = (props) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the device supports touch events
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const baseClasses = "font-bold rounded-3xl h-[50px] w-[50px]";
  const hoverClasses =
    "hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-neutral-100 dark:hover:text-neutral-700";

  return (
    <>
      <div className="m-auto">
        <button
          className={`${baseClasses} ${
            props.disabled ? "hidden" : "text-blue-500 dark:text-blue-400"
          } ${isTouchDevice || props.disabled ? "" : hoverClasses}`}
          onClick={() => {
            if (!props.disabled) props.handleFunction(props.dir);
          }}
        >
          <FontAwesomeIcon
            icon={props.dir === "left" ? faCaretLeft : faCaretRight}
            className="h-[50px] w-[50px]"
          />
        </button>
      </div>
    </>
  );
};

export default NavArrow;
