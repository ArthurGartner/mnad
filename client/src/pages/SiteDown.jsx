import React from "react";
import { logoCoconut } from "../assets";

const SiteDown = () => {
  return (
    <div>
      <div className="items-center w-fit m-auto h-[55vh] md:h-[65vh] flex flex-col md:flex-row mb-[20vh] md:mb-0 mt-10">
        <img
          src={logoCoconut}
          alt="logo"
          className="w-[150px] md:w-[250px] m-auto mt-32 md:m-0"
        />
        <div className="md:align-middle m-auto md:ml-28">
          <div className="mb-5">
            <h1 className="text-black dark:text-white text-3xl md:text-4xl text-center mt-5 inline-bloc">
              We're still building the bar.
            </h1>
          </div>
          <div className="mt-5">
            <h1 className="text-black dark:text-white text-3xl md:text-4xl text-center mt-3 inline-block">
              Come back later for a drink.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDown;
