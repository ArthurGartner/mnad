import { motion } from "framer-motion";
import SidebarMenuItem from "./SidebarMenuItem";
import { BiSolidDrink } from "react-icons/bi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaHammer } from "react-icons/fa";
import { FaBaseballBatBall } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { RiBeerFill } from "react-icons/ri";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuIcons: { [key: string]: JSX.Element } = {
  about: <IoIosInformationCircle />,
  create: <FaHammer />,
  games: <FaBaseballBatBall />,
  data: <VscGraph />,
  drinks: <RiBeerFill />,
};

interface NavBarVerticalListProps {
  navLinksObject: { [key: string]: string };
  setCurPageName: React.Dispatch<React.SetStateAction<string>>;
}

const NavBarVerticalList: React.FC<NavBarVerticalListProps> = ({
  navLinksObject,
  setCurPageName,
}) => {
  return (
    <motion.ul variants={variants} className="py-5 px-[40px]">
      {Object.entries(navLinksObject).map(([key, value]) => (
        <div className="py-2 cursor-pointer" key={key}>
          <SidebarMenuItem
            navLinkKey={key}
            navLinkValue={value}
            key={value}
            icon={menuIcons[value] || <BiSolidDrink />}
            setCurPageName={setCurPageName}
          />
        </div>
      ))}
    </motion.ul>
  );
};

export default NavBarVerticalList;
