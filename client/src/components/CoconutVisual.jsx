import React from "react";
import { BlankCoconut } from "../assets";
import { SVGModifier } from "../components";

const CoconutVisual = (props) => {
  const desc = "Balanced";

  return (
    <div className="w-100 relative">
      <div className="text-center font-semibold text-4xl text-black dark:text-white">
        {desc}
      </div>
      <div className="relative">
        <img src={BlankCoconut} className="absolute" alt="" />
        <div className="relative">
          <SVGModifier className="absolute" value={props.sentiment} />
        </div>
      </div>
    </div>
  );
};

export default CoconutVisual;
