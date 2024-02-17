import { motion } from "framer-motion";
import colors from "~/styles/colors";

interface MenuToggleProps {
  toggle: () => void;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  return (
    <button onClick={toggle}>
      <svg viewBox="0 0 23 23" className="w-[23px] h-[23px]">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: colors.text.light },
            open: { d: "M 3 16.5 L 17 2.5", stroke: colors.gloomyRed.light },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, stroke: colors.text.light },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: {
              d: "M 2 16.346 L 20 16.346",
              stroke: colors.text.light,
            },
            open: { d: "M 3 2.5 L 17 16.346", stroke: colors.gloomyRed.light },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
