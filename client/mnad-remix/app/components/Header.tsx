import NavBar from "./NavBar";
import Icon from "~/assets/coconut_icon.svg";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled down, otherwise false
      setIsScrolled(window.pageYOffset > 0);
    };

    // Listen for scroll events on the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    transition: "box-shadow 0.5s ease", // Smooth transition for the shadow
  };

  return (
    <>
      <div
        className={` z-20 sticky top-0 bg-background-light ${
          isScrolled ? "shadow-xl" : ""
        }`}
        style={headerStyle}
      >
        <div className="flex items-center h-[50px] mx-auto 2xl:w-[2000px] px-3 md:px-0">
          <div className="py-1 h-full w-[60px]">
            <img src={Icon} alt="Icon" className="h-full" />
          </div>
          <div className="w-full">
            <NavBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
