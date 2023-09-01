import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "../components";

const DayStats = () => {
  const diff = 4;

  return (
    <div className="bg-neutral-100 dark:bg-neutral-700 shadow-xl rounded-3xl h-full">
      <div className="w-100 h-full flex flex-col">
        <div className="pt-3 pl-5">
          <div className="text-base md:text-2xl font-semibold text-neutral-400">
            Sentiment Change
          </div>
          <div className="font-semibold text-3xl md:text-5xl text-black dark:text-white">
            <span className="text-red-500 dark:text-red-400">
              <FontAwesomeIcon icon={faCaretDown} /> {diff}%
            </span>
          </div>
        </div>
        <div className="text-center font-semibold text-xl md:text-4xl"></div>
        <div className="flex-grow flex items-center w-full">
          <div className="w-full px-5">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayStats;
