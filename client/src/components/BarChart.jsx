import React from "react";
import "./BarChart.css";
import { IndustryBar, DiffPercentBar } from "../components";

const BarChart = () => {
  const industry1 = {
    name: "Technology",
    diff: -75,
  };
  const industry2 = {
    name: "Business",
    diff: -100,
  };
  const industry3 = {
    name: "Health",
    diff: -25,
  };
  const industry4 = {
    name: "Science",
    diff: -25,
  };
  const industry5 = {
    name: "Enery",
    diff: -25,
  };
  const industry6 = {
    name: "Entertainment",
    diff: -25,
  };
  const industry7 = {
    name: "Sports",
    diff: -25,
  };
  const industry8 = {
    name: "Transportation",
    diff: -25,
  };
  const industry9 = {
    name: "Social Issues",
    diff: -25,
  };
  const industry10 = {
    name: "Art & Culture",
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
                <div className="text-sm md:text-xl font-semibold text-black dark:text-white">
                  {industryObject.name}
                </div>
              </div>
            ))}
          </div>
          <div className="percent-diff-bar grow relative">
            <div>
              {industryArray.map((industryObject, index) => (
                <IndustryBar
                  value={industryObject.diff}
                  name={industryObject.name}
                />
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
