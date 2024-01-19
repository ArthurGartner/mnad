import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";

export default function NavBar() {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

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

  return (
    <nav className="bg-gray-100">
      <ul ref={navRef} className="flex justify-around relative p-0">
        {["Data", "About", "Drinks", "Games"].map((text) => (
          <li key={text} className="mx-2">
            <NavLink
              to={`/${text.toLowerCase()}`}
              className="text-gray-700 no-underline hover:text-blue-500 font-sans"
              onClick={handleItemClick}
            >
              {text}
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
