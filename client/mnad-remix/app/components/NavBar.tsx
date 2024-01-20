import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";

export default function NavBar() {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

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
    const activeItem = navRef.current?.querySelector(
      `a[href='${location.pathname}']`
    );
    if (activeItem) {
      updateUnderline(activeItem);
    }
  }, [location]);

  Object.entries(navLinks).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });

  return (
    <nav>
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
    </nav>
  );
}
