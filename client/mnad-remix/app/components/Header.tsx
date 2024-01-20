import NavBar from "./NavBar";
import Icon from "~/assets/coconut_icon.svg";

export default function Header() {
  return (
    <>
      <div className="flex items-center h-[50px]">
        <img src={Icon} alt="Icon" className="h-full py-1" />
        <div className="ml-[40px]">
          <NavBar />
        </div>
      </div>
    </>
  );
}
