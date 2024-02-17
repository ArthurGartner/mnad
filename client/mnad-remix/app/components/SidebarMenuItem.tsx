import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import React from "react";
import { useMatch, useResolvedPath } from "@remix-run/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface SidebarMenuItemProps {
  navLinkKey: string;
  navLinkValue: string;
  icon: JSX.Element;
  setCurPageName: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  navLinkKey,
  navLinkValue,
  icon,
  setCurPageName,
}) => {
  // Resolve the path to account for relative paths
  let resolved = useResolvedPath(`/${navLinkValue.toLowerCase()}`);
  // Determine if the current route matches the link's destination
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <motion.li variants={variants}>
      <div className="flex">
        <div className="text-[1rem] font-semibold">
          <NavLink
            onClick={() => setCurPageName(navLinkKey)}
            to={`/${navLinkValue.toLowerCase()}`}
            className={({ isActive }) =>
              ` hover:text-primary-light ${
                isActive ? "active-sidebar-link-active" : "active-sidebar-link"
              }`
            }
          >
            <div className="flex">
              <div className="w-[35px]">
                {React.cloneElement(icon, {
                  className: `h-[23px] w-[23px] ${
                    match ? "text-primary-light" : "text-black"
                  }`,
                })}
              </div>
              <div>
                <div className="whitespace-nowrap">{navLinkKey}</div>
                <span
                  className={`block h-[4px] bg-primary-light transition-all duration-300 ${
                    match ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </motion.li>
  );
};

export default SidebarMenuItem;
