import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DayStats = () => {
  return (
    <div className="w-100">
      <div className="text-center font-semibold text-4xl">
        <span className="text-red-500 dark:text-red-400">
          <FontAwesomeIcon icon={faCaretDown} /> 4%
        </span>
      </div>
    </div>
  );
};

export default DayStats;
