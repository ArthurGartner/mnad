import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import colors from "~/styles/colors";

interface AnimatedCaretProps {
  value: number;
}

const AnimatedCaret: React.FC<AnimatedCaretProps> = ({ value }) => {
  const isPositive = value > 0;
  const color = isPositive
    ? colors.cheerfulGreen.light
    : value < 0
    ? colors.gloomyRed.light
    : "#000"; // Red for negative, green for positive, black for 0
  const rotate = isPositive ? 180 : 0;
  const opacity = value === 0 ? 0 : 1; // Set opacity to 0 when value is 0

  return (
    <motion.div
      animate={{ rotateX: rotate, opacity: opacity }}
      transition={{ duration: 0.5 }}
      style={{
        display: "inline-block",
        color: color,
        // Set the rotation origin to the center of the icon horizontally and slightly lower than center vertically
        originX: "50%",
        originY: "55%",
      }}
    >
      <FaCaretDown />
    </motion.div>
  );
};

export default AnimatedCaret;
