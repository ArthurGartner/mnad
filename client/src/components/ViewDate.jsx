import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function dateToday(specificDate) {
  // Get day, month, and year from the specific date
  const specificDay = specificDate.getDate();
  const specificMonth = specificDate.getMonth();
  const specificYear = specificDate.getFullYear();

  // Create a Date object for the current date and time
  const currentDate = new Date();

  // Get day, month, and year from the current date
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Compare the current and specific dates
  return (
    currentDay === specificDay &&
    currentMonth === specificMonth &&
    currentYear === specificYear
  );
}

const ViewDate = ({ date, abvDiff }) => {
  return (
    <div>
      <div className="text-md md:text-lg font-semibold text-center text-neutral-400">
        {date}
      </div>
      <div className="text-sm md:text-base font-semibold text-center text-neutral-400">
        {dateToday(new Date(date)) ? "Today" : ""}
        {abvDiff > 0 && (
          <span className="text-green-500 dark:text-green-400 ml-2">
            <FontAwesomeIcon icon={faCaretUp} /> {abvDiff}% ABV
          </span>
        )}
        {abvDiff < 0 && (
          <span className="text-red-500 dark:text-red-400 ml-2">
            <FontAwesomeIcon icon={faCaretDown} /> {abvDiff}% ABV
          </span>
        )}
      </div>
    </div>
  );
};

export default ViewDate;
