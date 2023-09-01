import React from "react";
import { BlankCoconut } from "../assets";
import { SVGModifier } from "../components";
import { getSentimentPhrase } from "../../util/functions";

const CoconutVisual = (props) => {
  const desc = "Balanced";

  return (
    <div className="bg-neutral-100 dark:bg-neutral-700 shadow-xl rounded-3xl">
      <div className="w-100 relative">
        <div className="pt-3 pl-5">
          <div className="text-base md:text-2xl font-semibold text-neutral-400">
            General Sentiment
          </div>
          <div className="font-semibold text-3xl md:text-5xl text-black dark:text-white">
            {getSentimentPhrase(props.sentiment)}
          </div>
        </div>

        <div className="relative">
          <img src={BlankCoconut} className="absolute" alt="" />
          <div className="relative">
            <SVGModifier className="absolute" value={props.sentiment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoconutVisual;
