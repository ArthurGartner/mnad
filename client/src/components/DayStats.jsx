import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "../components";

const DayStats = () => {
  const diff = 4;

  return (
    <div className="w-100 h-full flex flex-col">
      <div className="text-center font-semibold text-xl md:text-4xl">
        <span className="text-red-500 dark:text-red-400">
          <FontAwesomeIcon icon={faCaretDown} /> {diff}%
        </span>
      </div>
      <div className="flex-grow flex items-center w-full">
        <div className="w-full">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default DayStats;
