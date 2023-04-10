import React from "react";
import { Link } from "react-router-dom";
import { logoCoconut } from "../assets";
import { NavbarDropdown, ThemeToggle } from ".";
const Navbar = ({ setTheme, theme }) => {
  return (
    <header className="fixed w-full h-[55px] md:h-[40px] bg-neutral-100 dark:bg-neutral-900">
      <div className="flex justify-between items-center h-full w-full lg:w-[960px] xl:w-[1140px] m-auto">
        <Link to="/">
          <img
            src={logoCoconut}
            alt="logo"
            className="h-[40px] md:h-[24px] mx-2"
          />
        </Link>
        {/* <Link to="/">
          <img
            src={logoCoconut}
            alt="logo"
            className="hidden md:inline h-[24px] mx-5"
          />
        </Link> */}
        <div className="mx-2">
          <ThemeToggle setTheme={(setTheme, theme)} />
          <NavbarDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
