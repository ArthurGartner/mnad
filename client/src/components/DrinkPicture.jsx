import React from "react";
import { ReactComponent as EmptyGlass } from "../assets/empty_Glass.svg";
import { ReactComponent as Liquid } from "../assets/liquid.svg";
import { empty_glass } from "../assets";

const DrinkPicture = () => {
  return (
    <>
      <div className="h-full">
        <div className="relative drink-container h-full">
          <div className="h-full">
            <div className="drink-glass relative h-full">
              <img className=" absolute h-full w-full" src={empty_glass} />
              <Liquid
                className="h-full w-full absolute"
                style={{ fill: "#9D702E" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkPicture;
