import { motion } from "framer-motion";
import SidebarMenuItem from "./SidebarMenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4];

const NavBarVerticalList: React.FC = () => {
  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <SidebarMenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

export default NavBarVerticalList;
