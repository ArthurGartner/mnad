import React from "react";
import "./BarChart.css";
import { DiffPercentBar } from "../components";

const BarChart = () => {
  return (
    <>
      <div className="h-[800px] w-full">
        <div className="flex">
          <div className="industry-labels text-left text-lg">
            <div className="h-[50px] flex justify-center items-center">
              <div>Technology</div>
            </div>
            <div className="h-[50px] flex justify-center items-center">
              <div>Finance</div>
            </div>
            <div className="h-[50px] flex justify-center items-center">
              <div>Healthcare</div>
            </div>
          </div>
          <div className="percent-diff-bar grow relative">
            <div className="flex">
              <div className="w-1/2 flex justify-end items-center"></div>
              <div className="w-1/2 flex justify-start items-center">
                <div className="h-[50px] w-full">
                  <div className="fjustify-center">
                    <DiffPercentBar value={70} />
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
