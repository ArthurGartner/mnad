import React from "react";

const Footer = () => {
  return (
    <div className="text-center text-xs text-black dark:text-white font-semibold">
      <div>
        Made with 🍺 by{" "}
        <a href="https://www.linkedin.com/in/arthurgartner/">
          <span className="text-violet-500 dark:text-violet-400">
            Arthur Gartner{" "}
          </span>
        </a>
        in Denver, CO 🏔
      </div>
    </div>
  );
};

export default Footer;
