import NavBar from "./NavBar";
import Icon from "~/assets/coconut_icon.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center h-[50px] z-20">
        <div className="py-1 h-full w-[60px]">
          <img src={Icon} alt="Icon" className="h-full" />
        </div>
        <div className="">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Header;
