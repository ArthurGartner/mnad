import React from "react";
import { logoCoconut } from "../assets";

const SiteDown = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 h-screen">
      <div className="grid h-screen place-items-center">
        <div>
          <img src={logoCoconut} alt="logo" className="m-auto w-[250px]" />
          <h1 className="text-black dark:text-white text-2xl xl:text-4xl text-center mt-20">
            We're still building the bar.
          </h1>
          <h1 className="text-black dark:text-white text-2xl xl:text-4xl text-center mt-3">
            Come back later for a drink.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SiteDown;
