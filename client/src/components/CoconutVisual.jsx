import React from "react";
import { BlankCoconut } from "../assets";
import SVGModifier from "./SVGModifier";

const CoconutVisual = () => {
  return (
    <div className="w-100 relative">
      <div className="text-center font-semibold text-4xl text-black dark:text-white">
        Balanced
      </div>
      <div className="relative">
        <img src={BlankCoconut} className="absolute" alt="" />
        <div className="relative">
          <SVGModifier className="absolute" value={100} />
        </div>
      </div>
    </div>
  );
};

export default CoconutVisual;
