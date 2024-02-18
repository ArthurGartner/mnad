import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import MenuToggle from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import NavBarVerticalList from "./NavBarVerticalList";
import TextAppearAnimation from "./TextAppearAnimation";

export default function NavBar() {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [curPageName, setCurPageName] = useState("");

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

  const handleItemClick =
    (pageName: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      setCurPageName(pageName);
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

    const handleResize = () => {
      const activeItem = navRef.current?.querySelector(
        `a[href='${location.pathname}']`
      );
      if (activeItem) {
        updateUnderline(activeItem);
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef, location]);

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
      opacity: 2,
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
      opacity: 0,
    },
  };

  return (
    <nav className="flex flex-row justify-end md:justify-between text-end w-full">
      <div className="hidden md:inline">
        <ul ref={navRef} className="flex relative p-0">
          {Object.entries(navLinks).map(([key, value]) => (
            <li
              key={value}
              className="text-nav-link-md lg:text-nav-link-lg mr-[30px] font-semibold"
            >
              <NavLink
                to={`/${value.toLowerCase()}`}
                className="text-gray-700 no-underline hover:text-primary-light"
                onClick={handleItemClick(key)}
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
      <div className="md:hidden grow items-center text-center font-semibold overflow-hidden">
        <TextAppearAnimation
          text={curPageName}
          key={curPageName}
          gradient={false}
        />
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={"1000px"}
        ref={containerRef}
        className="relative inline md:hidden w-[60px]"
      >
        <div className="text-end h-full flex justify-end">
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
        <motion.div
          className={`absolute w-fit h-auto top-[40px] right-0 bg-background-light rounded-2xl overflow-hidden`}
          variants={sidebar}
        >
          <NavBarVerticalList
            navLinksObject={navLinks}
            setCurPageName={setCurPageName}
          />
        </motion.div>
      </motion.div>
    </nav>
  );
}
