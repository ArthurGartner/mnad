import React from "react";

const Header = ({ Title, Subtitle }) => {
  return (
    <div className="my-5">
      <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
        {Title}
      </h1>
      <h5 className="text-sm md:text-base font-semibold text-neutral-500">
        {Subtitle}
      </h5>
    </div>
  );
};

export default Header;
