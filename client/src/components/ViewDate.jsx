import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const ViewDate = ({ date }) => {
  return (
    <div>
      <div className="text-md md:text-lg font-semibold text-center text-neutral-400">
        {date}
      </div>
      <div className=" text-sm md:text-base font-semibold text-center text-neutral-400">
        <span className="mr-2">Today </span>
        <span className="text-green-500 dark:text-green-400">
          <FontAwesomeIcon icon={faCaretUp} /> 1% ABV
        </span>
      </div>
    </div>
  );
};

export default ViewDate;
