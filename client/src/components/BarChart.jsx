import React, { useState, useEffect } from "react";
import "./BarChart.css";
import { IndustryBar, DiffPercentBar } from "../components";

const BarChart = (props) => {
  const [maxDiff, setMaxDiff] = useState(10);

  const industry1 = {
    name: "Technology",
    diff: -95,
  };
  const industry2 = {
    name: "Business",
    diff: 80,
  };
  const industry3 = {
    name: "Health",
    diff: 75,
  };
  const industry4 = {
    name: "Science",
    diff: -70,
  };
  const industry5 = {
    name: "Energy",
    diff: 60,
  };
  const industry6 = {
    name: "Entertainment",
    diff: -40,
  };
  const industry7 = {
    name: "Sports",
    diff: -30,
  };
  const industry8 = {
    name: "Transportation",
    diff: 30,
  };
  const industry9 = {
    name: "Social Issues",
    diff: 22,
  };
  const industry10 = {
    name: "Art & Culture",
    diff: -10,
  };

  const industryArray = [
    industry1,
    industry2,
    industry3,
    industry4,
    industry5,
    industry6,
    industry7,
    industry8,
    industry9,
    industry10,
  ];

  industryArray.forEach((industry) => {
    if (Math.abs(industry.diff) > maxDiff) setMaxDiff(Math.abs(industry.diff));
  });

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
          <div className="percent-diff-bar grow">
            <div className="relative">
              {industryArray.map((industryObject, index) => (
                <IndustryBar
                  value={industryObject.diff}
                  name={industryObject.name}
                />
              ))}
              <div className="vertical-line text-neutral-500 bg-neutral-500"></div>
            </div>
            <hr className="h-[3px] bg-neutral-500 text-neutral-500"></hr>
            <div className="w-full flex justify-between font-semibold text-2xl text-black dark:text-white">
              <div className="text-red-500 dark:text-red-400">-{maxDiff}</div>
              <div className="text-green-500 dark:text-green-400">
                +{maxDiff}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
