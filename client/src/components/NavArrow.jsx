import React from "react";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavArrow = (props) => {
  return (
    <>
      <div className="m-auto">
        <button
          className="hover:bg-blue-500 dark:hover:bg-blue-400 font-bold rounded-3xl h-[50px] w-[50px] text-blue-500 dark:text-blue-400 hover:text-neutral-100 dark:hover:text-neutral-700"
          onClick={() => props.handleFunction(props.dir)}
        >
          <FontAwesomeIcon
            icon={props.dir == "left" ? faCaretLeft : faCaretRight}
            className="h-[50px] w-[50px]"
          />
        </button>
      </div>
    </>
  );
};

export default NavArrow;
