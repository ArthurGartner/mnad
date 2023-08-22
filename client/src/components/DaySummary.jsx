import React from "react";
import CoconutVisual from "./CoconutVisual";
import { DayStats } from "../components";

const DaySummary = (props) => {
  return (
    <div className="w-100 flex justify-between">
      <div className="w-1/2">
        <CoconutVisual sentiment={props.sentiment} />
      </div>
      <div className="w-1/2">
        <DayStats />
      </div>
    </div>
  );
};

export default DaySummary;
