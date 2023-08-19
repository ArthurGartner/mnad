import React from "react";
import { logoCoconut } from "../assets";

const CoconutVisual = () => {
  return (
    <div className="w-100">
      <div className="text-center font-semibold text-4xl text-black dark:text-white">
        Balanced
      </div>
      <div>
        <img src={logoCoconut} alt="" />
      </div>
    </div>
  );
};

export default CoconutVisual;
