import React from "react";
import { DiffPercentBar } from "../components";

const IndustryBar = (props) => {
  return (
    <>
      <div className="m-auto">
        <div className="flex">
          <div className="w-1/2 flex justify-end items-center">
            {" "}
            <div className="h-[50px] w-full">
              <div className="justify-center">
                <DiffPercentBar
                  value={props.value < 0 ? Math.abs(props.value) : 0}
                  reverse={true}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-center">
            <div className="h-[50px] w-full">
              <div className="justify-center">
                <DiffPercentBar value={props.value >= 0 ? props.value : 0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryBar;
