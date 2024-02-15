import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import MenuToggle from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import NavBarVerticalList from "./NavBarVerticalList";

export default function NavBar() {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const navLinks = {
    "The Bar": "",
    "Analytics & Trends": "data",
    "All Drinks": "drinks",
    "Create Your Own": "create",
    "Drinking Games": "games",
    About: "about",
  };

  const updateUnderline = (element: Element) => {
    const itemRect = element.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    setUnderlineStyle({
      width: itemRect.width + "px",
      left: itemRect.left - (navRect?.left ?? 0) + "px",
      transition: "left 0.3s ease, width 0.3s ease",
    });
  };

  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    updateUnderline(event.currentTarget);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(
      `a[href='${location.pathname}']`
    );
    if (activeItem) {
      updateUnderline(activeItem);
    }
  }, [location]);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }),
    closed: {
      clipPath: "circle(30px at 335px 8px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
      boxShadow: "none",
    },
  };

  return (
    <nav className="flex flex-row justify-between w-full">
      <div>
        <ul ref={navRef} className="flex relative p-0">
          {Object.entries(navLinks).map(([key, value]) => (
            <li key={value} className="text-nav-link mr-[30px] font-semibold">
              <NavLink
                to={`/${value.toLowerCase()}`}
                className="text-gray-700 no-underline hover:text-primary-light"
                onClick={handleItemClick}
              >
                {key}
              </NavLink>
            </li>
          ))}
          <div
            style={{ ...underlineStyle }}
            className="absolute bottom-0 h-1 bg-primary-light"
          />
        </ul>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={"1000px"}
        ref={containerRef}
        className="relative"
      >
        <div className="z-50"></div>
        <motion.div
          className={`absolute w-[350px] h-auto top-0 right-0 bg-background-light rounded-2xl`}
          variants={sidebar}
        >
          <div className="text-end mt-[8px]">
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
          <NavBarVerticalList navLinksObject={navLinks} />
        </motion.div>
      </motion.div>
    </nav>
  );
}
