import React from "react";
import CoconutVisual from "./CoconutVisual";
import { DayStats } from "../components";

const DaySummary = (props) => {
  return (
    <div className="w-100 md:flex md:justify-between">
      <div className="w-1/2 mx-auto">
        <CoconutVisual sentiment={props.sentiment} />
      </div>
      <div className="w-1/2 mx-auto">
        <DayStats />
      </div>
    </div>
  );
};

export default DaySummary;
