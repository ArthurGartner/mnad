import React from "react";
import CoconutVisual from "./CoconutVisual";
import { DayStats } from "../components";

const DaySummary = (props) => {
  return (
    <div className="w-100 md:flex md:justify-between">
      <div className="md:w-1/2">
        <div className="w-full mb-5 md:mr-3 md:mb-0">
          <CoconutVisual sentiment={props.sentiment} />
        </div>
      </div>

      <div className="md:w-1/2 mx-auto md:ml-3">
        <DayStats />
      </div>
    </div>
  );
};

export default DaySummary;
