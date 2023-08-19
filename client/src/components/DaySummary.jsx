import React from "react";
import CoconutVisual from "./CoconutVisual";
import DayStats from "./DayStats";

const DaySummary = () => {
  return (
    <div className="w-100 flex justify-between">
      <div className="w-1/2">
        <CoconutVisual />
      </div>
      <div className="w-1/2">
        <DayStats />
      </div>
    </div>
  );
};

export default DaySummary;
