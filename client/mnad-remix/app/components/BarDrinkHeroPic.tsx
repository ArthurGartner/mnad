import DrinkGlass from "~/assets/copper_mug.svg";
import { motion } from "framer-motion";

export default function BarDrinkHeroPic() {
  return (
    <>
      <div className="flex h-full w-full">
        <div className="flex-grow overflow-hidden h-full">
          <motion.img
            src={DrinkGlass}
            alt="Drink Glass"
            className="w-full md:h-full m-auto p-5 z-0"
            initial={{ x: -100, opacity: 0, scale: 1.3 }} // Start from left and fully transparent
            animate={{ x: 0, opacity: 1, scale: 1.3 }} // End at original position and fully opaque
            transition={{ duration: 0.5 }} // Transition duration
            exit={{ x: 200, opacity: 0, scale: 1.3 }} // Optional: define the exit animation
          />
        </div>
      </div>
    </>
  );
}
