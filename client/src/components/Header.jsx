import React from "react";

const Header = ({ Title, Subtitle }) => {
  return (
    <div className="mt-5 mb-2">
      <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
        {Title}
      </h1>
      <h5 className="text-xs md:text-base font-semibold text-neutral-400">
        {Subtitle}
      </h5>
    </div>
  );
};

export default Header;
