import React from "react";
import "./BarChart.css";
import { DiffPercentBar } from "../components";

const BarChart = () => {
  const industry1 = {
    name: "Technology",
    diff: 5,
  };
  const industry2 = {
    name: "Finance",
    diff: 5,
  };
  const industry3 = {
    name: "Healthcare",
    diff: 5,
  };

  const industryArray = [industry1, industry2, industry3];

  return (
    <>
      <div className="h-[800px] w-full">
        <div className="flex">
          <div className="industry-labels text-left text-lg">
            {industryArray.map((industryObject, index) => (
              <div className="h-[50px] flex justify-center items-center">
                <div>{industryObject.name}</div>
              </div>
            ))}
          </div>
          <div className="percent-diff-bar grow relative">
            <div className="flex">
              <div className="w-1/2 flex justify-end items-center">
                {" "}
                <div className="h-[50px] w-full">
                  <div className="justify-center">
                    <DiffPercentBar value={100} reverse={true} />
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-start items-center">
                <div className="h-[50px] w-full">
                  <div className="justify-center">
                    <DiffPercentBar value={50} />
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
