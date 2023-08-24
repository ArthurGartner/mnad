import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "../components";

const DayStats = () => {
  const diff = 4;

  const data = [
    { industryName: "Tech", percentChange: 1 },
    { industryName: "Healthcare", percentChange: -4 },
    { industryName: "Finance", percentChange: 3 },
    { industryName: "Test", percentChange: 3 },
    // add more data points
  ];

  return (
    <div className="w-100 h-full flex flex-col">
      <div className="text-center font-semibold text-xl md:text-4xl">
        <span className="text-red-500 dark:text-red-400">
          <FontAwesomeIcon icon={faCaretDown} /> {diff}%
        </span>
      </div>
      <div className="flex-grow flex items-center w-full">
        <div className="w-full">
          <BarChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default DayStats;
