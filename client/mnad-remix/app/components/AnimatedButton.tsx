import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import colors from "~/styles/colors";

interface AnimatedButtonProps {
  iconColor: string;
  bgColor: string;
  icon: JSX.Element;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  iconColor,
  bgColor,
  icon,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const iconControls = useAnimation();
  const buttonControls = useAnimation();

  const handleClick = async () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      // If it wasn't clicked, enlarge the icon and change color to yellow
      await iconControls.start({
        scale: [1, 2.25, 2.5, 2.6],
        color: [bgColor, bgColor, iconColor, iconColor],
        transition: {
          duration: 0.4,
          times: [0, 0.25, 0.4],
          // type: "spring", // Use "spring" type for a bouncing effect
          // stiffness: 60, // Adjust the stiffness value to control the bounce
          // damping: 10,
        },
      });
      // Then revert the scale to 1
      await iconControls.start({ scale: 1, transition: { duration: 0.08 } });
      await buttonControls.start({
        backgroundColor: iconColor,
        transition: { duration: 0.25 },
      });
      await iconControls.start({ color: bgColor });
    } else {
      // If it was clicked, revert the scale to 1 and color to white
      iconControls.start({
        scale: 1,
        color: bgColor,
        transition: { duration: 0.1 },
      });
      buttonControls.start({
        backgroundColor: colors.inactiveButton,
        transition: { duration: 0.1 },
      });
    }
  };

  return (
    <motion.div
      className="bg-inactiveButton rounded-3xl m-1 cursor-pointer"
      animate={buttonControls}
    >
      <motion.div
        className={`m-2 text-background-light`}
        animate={iconControls}
        onClick={handleClick}
      >
        {React.cloneElement(icon, {
          className: "h-[15px] w-[15px] md:h-[30px] md:w-[30px]",
        })}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedButton;
