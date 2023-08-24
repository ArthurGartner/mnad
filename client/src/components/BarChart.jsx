import React from "react";
import "./BarChart.css";
import { IndustryBar, DiffPercentBar } from "../components";

const BarChart = () => {
  const industry1 = {
    name: "Technology",
    diff: -75,
  };
  const industry2 = {
    name: "Finance",
    diff: 50,
  };
  const industry3 = {
    name: "Healthcare",
    diff: -25,
  };

  const industryArray = [industry1, industry2, industry3];

  return (
    <>
      <div className="h-full w-full">
        <div className="flex">
          <div className="industry-labels text-left text-lg">
            {industryArray.map((industryObject, index) => (
              <div className="h-[50px] flex justify-center items-center">
                <div>{industryObject.name}</div>
              </div>
            ))}
          </div>
          <div className="percent-diff-bar grow relative">
            <div>
              {industryArray.map((industryObject, index) => (
                <IndustryBar value={industryObject.diff} />
              ))}
              <div className="vertical-line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
